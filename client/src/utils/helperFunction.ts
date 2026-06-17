export const floorValue = (val: number) => {
  return Math.floor(val);
};

export const Initials = (name: string) => {
  const value = name.split(" ");
  const initials = value[0][0] + value[1][0];
  return initials;
};

export const capitalize = (value: string) => {
  return value.toUpperCase();
};
