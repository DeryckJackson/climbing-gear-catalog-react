import { User } from '../actions/actions.types';

export type AuthReducerState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
};

export type RootReducerState = {
  // TODO:#5 Define reducer types with the "any" type
  gearlist: any;
  errors: any;
  messages: any;
  auth: AuthReducerState;
  redirect: any;
};
