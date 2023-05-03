import styled from 'styled-components'

import { gapMap, paddingMap, sizeMap } from '@wowjob/type'
import type { $TButton } from './button.type'
import { widthList } from '@wowjob/type'

export const getGap = ({ $gap }: $TButton) =>
  $gap ? `gap: ${gapMap[$gap] / 16}rem;` : ''

export const getHeight = ({ $size = 'm' }: $TButton) =>
  `height: ${sizeMap[$size] / 16}rem;`

export const getFontSize = ({ $size = 'm' }: $TButton) =>
  `font-size: ${sizeMap[$size] / 24}rem;`

export const getBorderRadius = ({ $size = 'm', $radius }: $TButton) =>
  !$radius || $radius === 'none'
    ? ''
    : `border-radius: ${sizeMap[$size] / ($radius === 'pill' ? 32 : 64)}rem;`

export const getPadding = ({ $padding = 'm' }: $TButton) =>
  `padding: 0 ${paddingMap[$padding] / 16}rem;`

export const getWidth = ({ $width = 'fit-content' }: $TButton) =>
  typeof $width === 'number'
    ? `width: ${($width || 0) / 16}rem;`
    : `width: ${$width};`

export const SButton = styled.button<$TButton>`
  ${getGap}
  ${getHeight}
  ${getWidth}
  ${getPadding}
  ${getFontSize}
  ${getBorderRadius}

  white-space: nowrap;

  border: 2px solid firebrick;

  display: inline-flex;
  align-items: center;
`
