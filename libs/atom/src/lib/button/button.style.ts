// button.style.ts
import styled from 'styled-components'

import { buttonGapMap, colorMap, paddingMap, sizeMap } from '@wowjob/type'
import type { $TButton } from './button.type'
import { widthList } from '@wowjob/type'
import {
  getAlign,
  getBackgroundColor,
  getColor,
  getJustify,
  getPadding,
  getWidth,
} from '@wowjob/util'

export const getGap = ({ $gap }: $TButton) =>
  $gap ? `gap: ${buttonGapMap[$gap] / 16}rem;` : ''

export const getHeight = ({ $size = 'm' }: $TButton) =>
  `height: ${sizeMap[$size] / 16}rem;`

export const getFontSize = ({ $size = 'm' }: $TButton) =>
  `font-size: ${sizeMap[$size] / 24}rem;`

export const getBorderRadius = ({ $size = 'm', $radius }: $TButton) =>
  !$radius || $radius === 'none'
    ? ''
    : `border-radius: ${sizeMap[$size] / ($radius === 'pill' ? 32 : 64)}rem;`

export const SButton = styled.button<$TButton>`
  ${getGap}
  ${getHeight}
  ${getWidth}
  ${getPadding}
  ${getFontSize}
  ${getBorderRadius}
  ${getBackgroundColor}
  ${getColor}
  ${getAlign}
  ${getJustify}

  cursor: pointer;

  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  border: 0;
  transition: 250ms;

  &:hover {
    background-color: hsla(
      ${colorMap.hover.h},
      ${colorMap.hover.s + '%'},
      ${colorMap.hover.l + '%'},
      1
    );
  }
`
