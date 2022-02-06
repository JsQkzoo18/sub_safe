const dt = new Date();

export const current_time = `${dt.getFullYear()}-${dt.getMonth() + 1}-${
  dt.getDate() + 1
} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
