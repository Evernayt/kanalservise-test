import { IUser } from "../models/IUser";
import { $host } from "./index";

interface IFetchUsers {
  (limit?: number): Promise<IUser[]>;
}

export const fetchUsersAPI: IFetchUsers = async (limit = 100) => {
  const { data } = await $host.get(`users/?_limit=${limit}`);
  return data;
};
