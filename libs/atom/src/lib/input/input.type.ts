import type {
  TColorType,
  TPaddingType,
  TSizeType,
  TTextAsType,
  TTextSizeType,
} from '@wowjob/type'
import type { FormikProps } from 'formik'

type label = string
type describedBy = string
type placeholder = string
type required = boolean
type type = string

export type TInput = {
  label?: label
  describedBy?: describedBy
  required?: required
  placeholder?: placeholder
  type?: type
  color?: TColorType
  as?: TTextAsType
  size?: TSizeType
  padding?: TSizeType
  name?: string
  field?: {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  form?: FormikProps<any>
  click?: () => void
}

export type $TInput = {
  as?: TTextAsType
  $size?: TSizeType
  $color?: TColorType
  $padding?: TSizeType
}
