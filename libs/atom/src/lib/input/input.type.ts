import type { TColorType, TTextAsType, TTextSizeType } from '@wowjob/type'
import type { FieldProps } from 'formik'

type label = string
type describedBy = string
type placeholder = string
type required = boolean
type type = string

export type Input = {
  label?: label
  describedBy?: describedBy
  required?: required
  placeholder?: placeholder
  type?: type
  color?: TColorType
  as?: TTextAsType
  size?: TTextSizeType
} & FieldProps

export type $Input = {
  as?: TTextAsType
  $size?: TTextSizeType
  $color?: TColorType
}
