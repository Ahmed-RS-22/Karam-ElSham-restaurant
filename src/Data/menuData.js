import raw from "./menu.json";

/* Helper: format price */
export const formatPrice = (price) => `${price} ج.م`;

/* Export converted data (keep object shape: category -> items array) */
export const menuData = Object.keys(raw).reduce((acc, cat) => {
  acc[cat] = raw[cat].map((it, idx) => ({
    id: `${cat}-${idx}`,
    ...it,
    priceFormatted: formatPrice(it.price),
  }));
  return acc;
}, {});
