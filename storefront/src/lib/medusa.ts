import Medusa from "@medusajs/js-sdk";

const MEDUSA_BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Medusa publishable API key is not set. Please set NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY in your environment variables."
  );
}

export const medusa = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  publishableKey: PUBLISHABLE_KEY,
});

export { MEDUSA_BACKEND_URL, PUBLISHABLE_KEY };
