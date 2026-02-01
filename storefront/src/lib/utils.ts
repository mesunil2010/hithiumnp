export function formatPrice(amount: number, currency: string = "BDT"): string {
  if (currency === "BDT") {
    return `৳${amount.toLocaleString("en-BD")}`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
