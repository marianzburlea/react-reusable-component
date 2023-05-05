// aspect.style.ts
import styled from 'styled-components'

import type { $TAspect } from './aspect.type'
import { getAspect } from '@wowjob/util'

export const SAspect = styled.div<$TAspect>`
  ${getAspect}

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
