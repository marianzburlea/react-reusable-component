import styled from 'styled-components'

import type { $TBox } from './box.type'
import {
  getAlign,
  getBackgroundColor,
  getColor,
  getGap,
  getHeight,
  getHidden,
  getInset,
  getJustify,
  getPadding,
  getPosition,
  getRadius,
  getVertical,
  getWidth,
  getWrap,
} from '@wowjob/util'
import { getBackgroundIamge, getPointer } from 'libs/util/src/lib/display'

export const SBox = styled.div<$TBox>`
  display: ${({ $inline }) => ($inline ? `inline-flex` : 'flex')};

  transition: 250ms;
  outline: 4px solid transparent;
  color: black;
  overflow: hidden;

  ${getWidth}
  ${getHeight}
  ${getVertical}
  ${getGap}
  ${getPadding}
  ${getRadius}
  ${getWrap}
  ${getHidden}
  ${getAlign}
  ${getJustify}
  ${getPosition}
  ${getInset}
  ${getBackgroundColor}
  ${getColor}
  ${getPointer}
  ${getBackgroundIamge}

  
  @media screen and (prefers-color-scheme: dark) {
    color: white;
  }
`
