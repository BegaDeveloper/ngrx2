import { UsersInterface } from './user.interface';

export interface UserStateInterface {
  isLoading: boolean;
  users: UsersInterface[];
  errors: string | null;
}
