// button.type.ts
import type {
  TAlignType,
  TButtonType,
  TColorType,
  TGapType,
  TJustifyType,
  TPaddingType,
  TSizeType,
  TWidthType,
} from '@wowjob/type'
import { TButtonRadiusType } from '@wowjob/type'
import type { ReactNode } from 'react'

export type TButton = {
  children?: ReactNode
  size?: TSizeType
  type?: TButtonType
  gap?: TGapType
  width?: TWidthType
  padding?: TPaddingType
  radius?: TButtonRadiusType
  color?: TColorType
  bgColor?: TColorType
  align?: TAlignType
  justify?: TJustifyType
}

export type $TButton = {
  $align?: TAlignType
  $justify?: TJustifyType
  type?: TButtonType
  $size?: TSizeType
  $gap?: TGapType
  $width?: TWidthType
  $padding?: TPaddingType
  $radius?: TButtonRadiusType
  $color?: TColorType
  $bgColor?: TColorType
}
