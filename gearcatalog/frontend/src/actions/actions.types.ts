import { Gear, GearNoId } from '../components/gear/types';

// TODO: #9 Create correct type for User
export type User = {
  username: string,
};

export type DeleteGear = (id: number, token: string) => void;
export type GetGear = (token: string) => void;
export type SelectGear = (id: number, token: string) => void;
export type AddGear = (gear: GearNoId, token: string) => void;
export type EditGear = (gear: Gear, token: string) => void;
