import type { TAlignType, TJustifyType } from '@wowjob/type'

export const getAlign = ({ $align }: { $align?: TAlignType }) =>
  $align ? `align-items: ${$align === true ? 'center' : $align};` : ''

export const getJustify = ({ $justify }: { $justify?: TJustifyType }) =>
  $justify ? `justify-content: ${$justify === true ? `center` : $justify};` : ''
