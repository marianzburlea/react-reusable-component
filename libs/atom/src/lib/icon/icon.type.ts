import type { TIconType, TIconSizeType, TColorType } from '@wowjob/type'

export type TIcon = {
  icon: TIconType
  size?: TIconSizeType
  color?: TColorType
}

export type $TIcon = {
  $icon: TIconType
  $color?: TColorType
  $size?: TIconSizeType
}
