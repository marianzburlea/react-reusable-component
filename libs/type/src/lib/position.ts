export const boxPositionList = [
  'static',
  'relative',
  'fixed',
  'absolute',
  'sticky',
] as const

export type TBoxPositionType = (typeof boxPositionList)[number]
export type TInset = number | 'auto'
