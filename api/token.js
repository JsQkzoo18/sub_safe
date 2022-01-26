import { TOKEN } from "../utils/env";

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}
