import { colorMap } from '@wowjob/type'
import type { TColorType } from '@wowjob/type'

const propList = ['color', 'background-color'] as const
type TPropType = (typeof propList)[number]

export const getBaseColor = (property: TPropType, value: TColorType) =>
  value
    ? `${property}: hsla(${colorMap[value].h}, ${colorMap[value].s}%, ${colorMap[value].l}%, 1);`
    : ''

export const getColor = ({ $color = 'text' }: { $color?: TColorType }) =>
  $color ? getBaseColor('color', $color) : ''

export const getBackgroundColor = ({ $bgColor }: { $bgColor?: TColorType }) =>
  $bgColor ? getBaseColor('background-color', $bgColor) : ''
