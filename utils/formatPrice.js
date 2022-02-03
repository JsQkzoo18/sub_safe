export function formatPrice(value) {
  const locale = "en-US";
  const currency = "USD";
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}
