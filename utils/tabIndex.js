const TABINDEX = "t_index";

export function setTIndex(index) {
  localStorage.setItem(TABINDEX, index);
}

export function getTIndex() {
  return localStorage.getItem(TABINDEX);
}

export function deleteTIndex() {
  localStorage.removeItem(TABINDEX);
}
