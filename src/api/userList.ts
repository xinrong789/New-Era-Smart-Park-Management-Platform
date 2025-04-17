import { post } from "../utils/http/request";
import type { DataType } from "../page/users/interface";
interface searchType {
  page: number;
  pageSize: number;
  companyNamne?: string;
  contact?: string;
  tel?: string;
}
export function getUserList(data: searchType) {
  return post("/userList", data);
}
// delete user
export function deleteUser(id: string) {
  return post("/deleteUser", { id });
}
//batch delete user
export function batchDeleteUser(ids: React.Key[]) {
  return post("/batchDeleteUser", { ids });
}
//add edit company
export function editUser(data: DataType) {
  return post("/editUser", data);
}
