import type {
  TButtonType,
  TGapType,
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
}

export type $TButton = {
  type?: TButtonType
  $size?: TSizeType
  $gap?: TGapType
  $width?: TWidthType
  $padding?: TPaddingType
  $radius?: TButtonRadiusType
}
