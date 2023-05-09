import type { TGapType, TPaddingType } from '@wowjob/type'
import { sizeMap } from '@wowjob/type'

export const getPadding = ({ $padding }: { $padding?: TPaddingType }) =>
  $padding ? `padding: ${sizeMap[$padding] / 16}rem;` : ''
