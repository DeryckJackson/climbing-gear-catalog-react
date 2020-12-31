import { Gear, GearNoId } from '../components/gear/types';
import { RootReducerState } from '../reducers/reducer.types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// TODO: #9 Create correct type for User
export type User = {
  username: string,
};

export type DeleteGear = (id: number, token: string) => void;
export type GetGear = (token: string) => void;
export type SelectGear = (id: number, token: string) => void;
export type AddGear = (gear: GearNoId, token: string) => void;
export type EditGear = (gear: Gear, token: string) => void;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducerState,
  unknown,
  Action<string>
>;

export type AsyncAppThunk<ReturnType = void> = AppThunk<Promise<ReturnType>>;

export type TokenConfig = {
  headers: {
    "Content-Type": string,
    "Authorization"?: string,
  }
};
