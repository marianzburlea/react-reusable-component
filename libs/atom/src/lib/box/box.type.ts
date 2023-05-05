import type {
  TBoxPositionType,
  TInset,
  TAlignType,
  TColorType,
  TFillType,
  TGapType,
  TJustifyType,
  TSizeType,
  TWidthType,
  TBoxAsType,
} from '@wowjob/type'
import type { ReactNode } from 'react'

type fill = TFillType
type gray = boolean
type vertical = boolean
type light = boolean
type dark = boolean
type inline = boolean
type hidden = boolean
type wrap = boolean

export type TExtraProps = { [key: string]: string }

export type TBox = {
  children?: ReactNode
  color?: TColorType
  bgColor?: TColorType
  fill?: fill
  gray?: gray
  vertical?: vertical
  light?: light
  dark?: dark
  inline?: inline
  wrap?: wrap
  gap?: TGapType
  padding?: TGapType
  size?: TSizeType
  radius?: TSizeType
  hidden?: hidden
  testId?: string
  describedBy?: string
  label?: string
  as?: TBoxAsType
  width?: TWidthType
  height?: TWidthType
  align?: TAlignType
  justify?: TJustifyType
  position?: TBoxPositionType
  inset?: TInset[]
}

export type $TBox = {
  $inset?: TInset[]
  $position?: TBoxPositionType
  as?: TBoxAsType
  $color?: TColorType
  $bgColor?: TColorType
  $fill?: fill
  $gray?: gray
  $vertical?: vertical
  $light?: light
  $dark?: dark
  $inline?: inline
  $wrap?: wrap
  $gap?: TGapType
  $padding?: TGapType
  $size?: TSizeType
  $radius?: TSizeType
  $hidden?: hidden
  $width?: TWidthType
  $height?: TWidthType
  $align?: TAlignType
  $justify?: TJustifyType
}
