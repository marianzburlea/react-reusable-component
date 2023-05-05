import type {
  TColorType,
  TTextAsType,
  TTextFontWeightType,
  TTextSizeType,
} from '@wowjob/type'
import type { ReactNode } from 'react'

type ellipsis = boolean
type crossed = boolean
type testId = string
type href = string
type title = string

export type TText = {
  children?: ReactNode
  size?: TTextSizeType
  color?: TColorType
  ellipsis?: ellipsis
  crossed?: crossed
  testId?: testId
  as?: TTextAsType
  editable?: boolean
  href?: href
  title?: title
  weight?: TTextFontWeightType
  grow?: number
}

export type $TText = {
  $grow?: number
  $weight?: TTextFontWeightType
  href?: href
  title?: title
  as?: TTextAsType
  $size?: TTextSizeType
  $color?: TColorType
  $ellipsis?: ellipsis
  $crossed?: crossed
}
