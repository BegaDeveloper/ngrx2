import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/models/userState.interface';
import * as UserActions from './actions';

export const initalState: UserStateInterface = {
  isLoading: false,
  users: [],
  errors: null,
};

export const reducers = createReducer(
  initalState,
  on(UserActions.getUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.getUsersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: action.users,
  })),
  on(UserActions.getUsersFail, (state, action) => ({
    ...state,
    isLoading: false,
    errors: action.error,
  }))
);
