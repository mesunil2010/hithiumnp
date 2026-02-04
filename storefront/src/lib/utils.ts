export function formatPrice(amount: number, currency: string = "NPR"): string {
  if (currency === "NPR") {
    return `NPR ${amount.toLocaleString("en-np")}`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
