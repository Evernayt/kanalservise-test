import { IPhoto } from "./IPhoto";
import { IUser } from "./IUser";

export interface IPost {
  id: number;
  title: string;
  body: string;
  user: IUser;
  photo: IPhoto;
}
