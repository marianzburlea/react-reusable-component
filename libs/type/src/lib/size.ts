export const sizeMap = {
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 32, // Large
  xl: 36, // Extra Large
  xxl: 40, // XX Large
  huge: 48, // Huge
  giant: 60, // Giant
  massive: 72, // Massive
} as const

export type TSizeType = keyof typeof sizeMap
