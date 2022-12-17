import { createAction, props } from '@ngrx/store';
import { UsersInterface } from 'src/app/models/user.interface';

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
  '[Users] Get Users Succesfully',
  props<{ users: UsersInterface[] }>()
);

export const getUsersFail = createAction(
  '[Users] Get Users Failed',
  props<{ error: string }>()
);
