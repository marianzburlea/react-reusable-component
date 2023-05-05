export const alignList = [
  'stretch',
  'start',
  'end',
  'center',
  'baseline',
  'revert',
  'initial',
] as const

export const justifyList = [
  'start',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
  'initial',
] as const

export type TAlignType = (typeof alignList)[number] | boolean
export type TJustifyType = (typeof justifyList)[number] | boolean
