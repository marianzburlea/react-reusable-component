// size.ts
export const sizeMap = {
  none: 0,
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 32, // Large
  xl: 36, // Extra Large
  xxl: 40, // XX Large
  xxxl: 48, // XX Large
  huge: 56, // Huge
  giant: 72, // Giant
  massive: 96, // Massive
  colossal: 128, // Massive
} as const

export type TSizeType = keyof typeof sizeMap
