import { User } from '../actions/actions.types';

export type AuthReducerState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
};

export type RootReducerState = {
  // TODO:#7 Define reducer types with the "any" type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gearlist: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any;
  auth: AuthReducerState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirect: any;
};
