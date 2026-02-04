import {
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createShippingOptionsWorkflow,
  createStockLocationsWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
} from "@medusajs/medusa/core-flows";
import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";

export default async function seed({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);
  const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT);
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL);
  const storeModuleService = container.resolve(Modules.STORE);

  logger.info("Seeding HiTHIUM Nepal store data...");

  // Update store details
  const [store] = await storeModuleService.listStores();
  if (store) {
    await storeModuleService.updateStores(store.id, {
      name: "HiTHIUM Nepal",
      supported_currencies: [
        { currency_code: "npr", is_default: true },
        { currency_code: "usd" },
      ],
    });
  }

  logger.info("Creating sales channels...");
  const { result: salesChannelsResult } =
    await createSalesChannelsWorkflow(container).run({
      input: {
        salesChannelsData: [
          {
            name: "HiTHIUM NP Online Store",
            description: "HiTHIUM Nepal official online storefront",
          },
        ],
      },
    });
  const defaultSalesChannel = salesChannelsResult[0];

  logger.info("Creating regions...");
  // Avoid creating a region if the country is already assigned to one
  const regionModuleService = container.resolve(Modules.REGION);
  const existingRegions = await regionModuleService.listRegions({}, { relations: ["countries"] });
  const countryCode = "NP";
  const found = existingRegions.find((r) => r.countries?.some((c) => (c.iso_2 ?? '').toUpperCase() === countryCode));
  let NepalRegion;

  if (!found) {
    const { result: regionsResult } = await createRegionsWorkflow(container).run({
      input: {
        regions: [
          {
            name: "Nepal",
            currency_code: "npr",
            countries: ["NP"],
            payment_providers: [],
          },
        ],
      },
    });
    NepalRegion = regionsResult[0];
  } else {
    logger.info(`Region containing country ${countryCode} already exists, skipping creation`);
    NepalRegion = found;
  }

  logger.info("Creating stock location...");
  const { result: stockLocationResult } =
    await createStockLocationsWorkflow(container).run({
      input: {
        locations: [
          {
            name: "HiTHIUM NP Warehouse",
            address: {
              city: "Kathmandu",
              country_code: "NP",
              address_1: "Kathmandu, Nepal",
            },
          },
        ],
      },
    });

  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocationResult[0].id,
      add: [defaultSalesChannel.id],
    },
  });

  logger.info("Creating fulfillment provider...");
  // Avoid creating duplicate fulfillment sets
  let fulfillmentSet;
  const existingSets = await fulfillmentModuleService.listFulfillmentSets({ name: "HiTHIUM NP Fulfillment" }, { relations: ["service_zones"] });
  if (existingSets.length > 0) {
    fulfillmentSet = existingSets[0];
    logger.info("Fulfillment set exists, skipping creation");
  } else {
    const createdSet = await fulfillmentModuleService.createFulfillmentSets({
      name: "HiTHIUM NP Fulfillment",
      type: "shipping",
      service_zones: [
        {
          name: "Nepal",
          geo_zones: [{ country_code: "NP", type: "country" }],
        },
      ],
    });
    fulfillmentSet = createdSet;
  }

  // logger.info("Creating shipping options...");
  // await createShippingOptionsWorkflow(container).run({
  //   input: [
  //     {
  //       name: "Standard Delivery (Kathmandu)",
  //       price_type: "flat",
  //       service_zone_id: fulfillmentSet.service_zones[0].id,
  //       shipping_profile_id: (
  //         await fulfillmentModuleService.listShippingProfiles()
  //       )[0].id,
  //       provider_id: "manual_local",
  //       type: {
  //         code: "standard",
  //         label: "Standard Delivery",
  //         description: "Delivery within Kathmandu - 2-3 business days",
  //       },
  //       prices: [
  //         { region_id: NepalRegion.id, amount: 500 },
  //       ],
  //     },
  //     {
  //       name: "Nationwide Delivery",
  //       price_type: "flat",
  //       service_zone_id: fulfillmentSet.service_zones[0].id,
  //       shipping_profile_id: (
  //         await fulfillmentModuleService.listShippingProfiles()
  //       )[0].id,
  //       provider_id: "manual_national",
  //       type: {
  //         code: "nationwide",
  //         label: "Nationwide Delivery",
  //         description: "Delivery across Nepal - 5-7 business days",
  //       },
  //       prices: [
  //         { region_id: NepalRegion.id, amount: 1500 },
  //       ],
  //     },
  //   ],
  // });

  logger.info("Creating product categories...");
  const { result: categoriesResult } =
    await createProductCategoriesWorkflow(container).run({
      input: {
        product_categories: [
          {
            name: "Energy Storage Systems",
            description:
              "HiTHIUM residential and commercial energy storage systems with LiFePO₄ technology",
            is_active: true,
          },
          {
            name: "Portable Power Stations",
            description:
              "Compact and portable HiTHIUM HeroEE power stations for on-the-go energy",
            is_active: true,
          },
          {
            name: "Solar Accessories",
            description:
              "Portable solar panels and accessories for off-grid charging",
            is_active: true,
          },
        ],
      },
    });

  const [essCategory, portableCategory, solarCategory] = categoriesResult;

  logger.info("Creating HiTHIUM products...");
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "HiTHIUM HeroEE 1 — 1kWh Portable Power Station",
          handle: "heroee-1",
          description:
            "The HITHIUM HeroEE1 Power Station (1000Wh) is a portable, eco-friendly energy backup solution with a long-lasting LiFePO₄ battery (10,000+ cycles). It delivers 200W pure sine wave output, supports both solar and AC charging, and features built-in UPS functionality. Ideal for home backup, outdoor adventures, and emergency power needs.",
          status: "published",
          category_ids: [portableCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "HeroEE 1 Standard",
              sku: "HEROEE-1-STD",
              manage_inventory: true,
              prices: [
                { amount: 29900, currency_code: "npr" },
                { amount: 280, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            battery_type: "LiFePO₄ (LFP)",
            capacity: "1000Wh (1kWh)",
            output_power: "200W Pure Sine Wave",
            cycle_life: "10,000+",
            charging: "Solar + AC",
            ups: "Yes",
            weight: "12kg",
            warranty: "5 Years",
          },
        },
        {
          title: "HiTHIUM HeroEE 2 — 2kWh Home Backup System",
          handle: "heroee-2",
          description:
            "The HiTHIUM HeroEE 2 is a 2kWh residential power supply with 1000W output, built with premium LiFePO₄ 314Ah cells and an ultra-long life cycle of 11,000 cycles. Perfect for home backup during load shedding, it provides reliable and clean energy for essential appliances.",
          status: "published",
          category_ids: [portableCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "HeroEE 2 Standard",
              sku: "HEROEE-2-STD",
              manage_inventory: true,
              prices: [
                { amount: 78800, currency_code: "npr" },
                { amount: 720, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            battery_type: "LiFePO₄ (LFP) 314Ah Cells",
            capacity: "2048Wh (2kWh)",
            output_power: "1000W",
            cycle_life: "11,000",
            charging: "Solar + AC",
            ups: "Yes",
            warranty: "5 Years",
          },
        },
        {
          title: "HiTHIUM HeroEE 8 — 8kWh Energy Storage System",
          handle: "heroee-8",
          description:
            "The HiTHIUM HeroEE 8 is a high-performance 8kWh lithium iron phosphate (LiFePO₄) energy storage system designed for both residential and commercial applications. Engineered with advanced safety features, long cycle life, and intelligent communication ports (CAN/RS485/RS232, optional WiFi/Bluetooth), it offers seamless integration with leading inverter brands including Victron, Deye, SMA, and GoodWe.",
          status: "published",
          category_ids: [essCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "HeroEE 8 Standard",
              sku: "HEROEE-8-STD",
              manage_inventory: true,
              prices: [
                { amount: 165000, currency_code: "npr" },
                { amount: 1500, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            battery_type: "LiFePO₄ (LFP)",
            capacity: "8192Wh (8kWh)",
            voltage: "51.2V",
            cycle_life: "11,000+",
            communication: "CAN/RS485/RS232, WiFi/Bluetooth (optional)",
            compatible_inverters: "Victron, Deye, SMA, GoodWe",
            expandable: "Up to 16 units in parallel (128kWh)",
            warranty: "10 Years",
          },
        },
        {
          title: "HiTHIUM HeroEE 16 — 16kWh LiFePO₄ Battery Pack",
          handle: "heroee-16",
          description:
            "The HiTHIUM HeroEE 16 is a 16kWh LiFePO₄ portable battery pack with 43.2–56.8V DC output, designed for solar integration and reliable home or commercial energy storage. With 314Ah cells and up to 11,000 cycle life, it can be expanded up to 256kWh by connecting 16 units in parallel. Features intelligent BMS with comprehensive protections.",
          status: "published",
          category_ids: [essCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "HeroEE 16 Standard",
              sku: "HEROEE-16-STD",
              manage_inventory: true,
              prices: [
                { amount: 306000, currency_code: "npr" },
                { amount: 2800, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            battery_type: "LiFePO₄ (LFP) 314Ah Cells",
            capacity: "16076.8Wh (16kWh)",
            voltage: "51.2V (43.2–56.8V range)",
            max_current: "200A charge/discharge",
            cycle_life: "11,000",
            expandable: "Up to 16 units in parallel (256kWh)",
            communication: "CAN/RS485/RS232",
            warranty: "10 Years",
          },
        },
        {
          title: "HiTHIUM HeroEE MaxPower 8 AIO — 8kWh All-In-One ESS",
          handle: "heroee-maxpower-8-aio",
          description:
            "The HiTHIUM HeroEE MaxPower 8 AIO is a revolutionary all-in-one energy storage system that integrates inverter, battery, and MPPT charge controller in a single compact unit. With 5kW rated output (38% above comparable 3.6kW units) and 180% DC/AC ratio supporting up to 9kW solar input, it delivers exceptional performance. Built with premium LiFePO₄ 314Ah cells in an 8S1P configuration, expandable from 8kWh to 128kWh.",
          status: "published",
          category_ids: [essCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "MaxPower 8 AIO Standard",
              sku: "HEROEE-MP8-AIO-STD",
              manage_inventory: true,
              prices: [
                { amount: 245000, currency_code: "npr" },
                { amount: 2250, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            battery_type: "LiFePO₄ (LFP) 314Ah Cells (8S1P)",
            capacity: "8038.4Wh (8kWh)",
            voltage: "25.6V",
            rated_output: "5,000W (5kW)",
            solar_input: "Up to 9,000W (9kW)",
            dc_ac_ratio: "180%",
            cycle_life: "11,000",
            built_in_inverter: "Yes (Pure Sine Wave)",
            built_in_mppt: "Yes",
            expandable: "Up to 16 units in parallel (128kWh)",
            warranty: "10 Years",
          },
        },
        {
          title: "HiTHIUM 200W Portable Solar Folding Panel",
          handle: "hithium-solar-200w",
          description:
            "HiTHIUM 200W Portable Solar Folding Panel (MD23-CS200E) with high-efficiency monocrystalline cells. Foldable, lightweight, and waterproof design perfect for pairing with HeroEE portable power stations. Features MC4 connectors for universal compatibility and an adjustable kickstand for optimal sun angle.",
          status: "published",
          category_ids: [solarCategory.id],
          sales_channels: [{ id: defaultSalesChannel.id }],
          options: [
            { title: "Variant", values: ["Standard"] },
          ],
          variants: [
            {
              title: "200W Solar Panel",
              sku: "SOLAR-200W-STD",
              manage_inventory: true,
              prices: [
                { amount: 23950, currency_code: "npr" },
                { amount: 220, currency_code: "usd" },
              ],
              options: { Variant: "Standard" },
            },
          ],
          metadata: {
            power: "200W",
            cell_type: "Monocrystalline",
            connector: "MC4",
            waterproof: "IP65",
            foldable: "Yes",
            warranty: "2 Years",
          },
        },
      ],
    },
  });

  logger.info("Seed completed successfully!");
}
