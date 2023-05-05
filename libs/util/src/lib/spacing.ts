import type { TGapType } from '@wowjob/type'
import { sizeMap } from '@wowjob/type'

export const getPadding = ({ $padding }: { $padding?: TGapType }) =>
  $padding ? `padding: ${sizeMap[$padding] / 16}rem;` : ''
