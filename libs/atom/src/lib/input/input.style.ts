import styled from 'styled-components'

import { colorMap, sizeMap } from '@wowjob/type'
import { getColor, getFontSize, getPadding } from '@wowjob/util'
import type { $TInput } from './input.type'

export const getSize = ({ $size = 'm' }: $TInput) => {
  // i am going to return a dynamic height
  return `
    height: ${sizeMap[$size] / 16}rem;
  `
}

export const SInput = styled.input<$TInput>`
  ${getColor}
  ${getSize}
  ${getPadding}
  ${getFontSize}

  &:focus {
    outline: 0.25rem solid
      hsla(${colorMap.hover.h}, ${colorMap.hover.s}%, ${colorMap.hover.l}%, 1);
  }

  outline: 0.25rem solid transparent;
  border: 0.25rem solid
    hsla(
      ${colorMap.hover.h},
      ${colorMap.hover.s + '%'},
      ${colorMap.hover.l + '%'},
      1
    );
  transition: 250ms;
  border-radius: 0.5rem;
`
