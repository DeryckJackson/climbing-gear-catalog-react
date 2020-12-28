import { Gear } from '../components/gear/types';

type GearNoId = {
  name: string,
  desc: string,
  brand: string,
  weight_grams: number,
  length_mm: number,
  width_mm: number,
  depth_mm: number,
  locking: string,
};

// TODO: #9 Create correct type for User
export type User = Record<string, unknown>;

export type DeleteGear = (id: string, token: string) => void;
export type GetGear = (token: string) => void;
export type SelectGear = (id: string, token: string) => void;
export type AddGear = (gear: GearNoId, token: string) => void;
export type EditGear = (gear: Gear, token: string) => void;
