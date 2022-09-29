import { IPost } from "../models/IPost";
import { $host } from "./index";

interface IFetchPosts {
  (userId: number, limit?: number): Promise<IPost[]>;
}

export const fetchPostsAPI: IFetchPosts = async (userId, limit = 100) => {
  const { data } = await $host.get(`posts/?userId=${userId}&_limit=${limit}`);
  return data;
};
