/**
 * Replace the extension of a file name with nothing
 */
export const RemoveExtension = (value) =>
  value ? value.replace(/\.[^/.]+$/, "") : "";
