export const widthList = [
  '100%',
  'fit-content',
  'min-content',
  'max-content',
] as const

export type TWidthType = number | (typeof widthList)[number]
