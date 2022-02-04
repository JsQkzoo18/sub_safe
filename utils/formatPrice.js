/**
 * It formats a number into a currency format.
 * @returns The `formatPrice` function returns a string.
 */
export function formatPrice(value) {
  const locale = "en-US";
  const currency = "USD";
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}
