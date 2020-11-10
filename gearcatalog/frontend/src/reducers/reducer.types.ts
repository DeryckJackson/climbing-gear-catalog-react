import { User } from '../actions/actions.types';

export type AuthReducerState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User;
};

export type RootReducerState = {
  // TODO: Define reducer types with any type
  gearlist: any;
  errors: any;
  messages: any;
  auth: AuthReducerState;
  redirect: any;
};
