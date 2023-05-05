// gap.ts
export const buttonGapMap = {
  none: 0, // No gap
  xxs: 2, // Extra extra small
  xs: 2, // Extra small
  s: 4, // Small
  m: 4, // Medium
  l: 4, // Large
  xl: 8, // Extra Large
  xxl: 12, // Double Extra Large
  xxxl: 12, // Triple Extra Large
  huge: 12, // Huge
  giant: 16, // Giant
  massive: 16, // Massive
  colossal: 16, // Colossal
} as const

export type TGapType = keyof typeof buttonGapMap
