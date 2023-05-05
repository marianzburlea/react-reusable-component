import styled from 'styled-components'

import { $TImage } from './image.type'
import { getAspect, getSrcset } from '@wowjob/util'

export const SImage = styled.img<$TImage>`
  width: 100%;
  height: 100%;

  ${getAspect}
  ${getSrcset}
`
