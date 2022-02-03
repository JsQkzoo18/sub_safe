export const RemoveExtension = (value) =>
  value ? value.replace(/\.[^/.]+$/, "") : "";
