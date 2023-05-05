import type {
  TIconType,
  TColorType,
  TTextAsType,
  TTextSizeType,
  TIconSizeType,
} from '@wowjob/type'

export type TLink = {
  size?: TTextSizeType
  color?: TColorType
  as?: TTextAsType

  href?: string
  title?: string
  label?: string
}

export type TIconButton = {
  icon: TIconType
  title: string
  href: string
  size?: TIconSizeType
  color?: TColorType
}
