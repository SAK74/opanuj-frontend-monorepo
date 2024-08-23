export const variants = [
  'primary',
  'success',
  'neutral',
  'warning',
  'danger',
] as const;

export type Variant = (typeof variants)[number];
