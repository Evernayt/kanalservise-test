import { IPhoto } from "../models/IPhoto";
import { $host } from "./index";

interface IFetchPhotos {
  (albumId: number, limit?: number): Promise<IPhoto[]>;
}

export const fetchPhotosAPI: IFetchPhotos = async (albumId, limit = 100) => {
  const { data } = await $host.get(
    `photos/?albumId=${albumId}&_limit=${limit}`
  );
  return data;
};
