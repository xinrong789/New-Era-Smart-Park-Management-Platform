import { post, get } from "../utils/http/request";

interface loginData {
  username: string;
  password: string;
}
interface AccountData {
  accountName: string;
}
export function login(data: loginData) {
  return post("/login", data);
}

export function getMenu() {
  return get("/menu");
}
export function getAccountList(data: AccountData) {
  return post("/accountList", data);
}
