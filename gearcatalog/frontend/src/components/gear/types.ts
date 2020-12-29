export type Gear = {
  id: number,
  name: string,
  desc: string,
  brand: string,
  weight_grams: number,
  length_mm: number,
  width_mm: number,
  depth_mm: number,
  locking: string,
};

// Need a gear with no id when adding new gear to the database
export type GearNoId = {
  name: string,
  desc: string,
  brand: string,
  weight_grams: number,
  length_mm: number,
  width_mm: number,
  depth_mm: number,
  locking: string,
};
