export type DomEvent = {
  preventDefault: () => void,
  target: {
    name: string
    value: string | number
  }
};