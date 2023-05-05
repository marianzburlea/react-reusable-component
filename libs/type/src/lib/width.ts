// width.ts
export const widthList = [
  '100%',
  '50%',
  'fit-content',
  'min-content',
  'max-content',
] as const

export type TWidthType = number | (typeof widthList)[number]
