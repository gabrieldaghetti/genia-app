import { IUser } from '@/types/user';

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}
