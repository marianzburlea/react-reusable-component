// padding.ts
export const paddingMap = {
  none: 0, // No padding
  xxs: 4, // Extra extra small
  xs: 8, // Extra small
  s: 12, // Small
  m: 16, // Medium
  l: 20, // Large
  xl: 24, // Extra Large
  xxl: 32, // Double Extra Large
  xxxl: 40, // Triple Extra Large
  huge: 60, // Huge
  giant: 72, // Giant
  massive: 96, // Massive
  colossal: 128, // Colossal
} as const

export type TPaddingType = keyof typeof paddingMap
