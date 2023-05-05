import styled from 'styled-components'

import { colorMap, sizeMap } from '@wowjob/type'
import { getColor, getFontSize } from '@wowjob/util'
import type { $Input } from './input.type'

export const getSize = ({ $size = 'm' }: $Input) => {
  // i am going to return a dynamic height
  return `
    height: ${sizeMap[$size] / 16}rem;
  `
}

export const Input = styled.input<$Input>`
  ${getColor}
  ${getFontSize}
  ${getSize}

  &:focus {
    outline: 0.25rem solid
      hsla(${colorMap.hover.h}, ${colorMap.hover.s}%, ${colorMap.hover.l}%, 1);
  }

  outline: 0.25rem solid transparent;
  border: 0.25rem solid
    hsla(${colorMap.hover.h}, ${colorMap.hover.s}%, ${colorMap.hover.l}%, 1);
  padding: 1rem;
  transition: 250ms;
  border-radius: 0.5rem;
`
