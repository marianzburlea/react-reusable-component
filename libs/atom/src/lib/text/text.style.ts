// text.style.ts
import styled from 'styled-components'

import type { $TText } from './text.type'
import {
  getColor,
  getCrossed,
  getEllipsis,
  getFontSize,
  getFontWeight,
  getGrow,
} from '@wowjob/util'
import { colorMap } from '@wowjob/type'

export const SText = styled.p<$TText>`
  ${getFontSize}
  ${getFontWeight}
  ${getCrossed}
  ${getColor}
  ${getEllipsis}
  ${getGrow}
  
  margin: 0;

  &:visited {
    ${getColor}
  }

  &:hover {
    color: hsla(
      ${colorMap.lavender.h},
      ${colorMap.lavender.s + '%'},
      ${colorMap.lavender.l + '%'},
      1
    );
  }
`
