import styled from 'styled-components'

import type { $TGrid } from './grid.type'
import {
  getGap,
  getGridTemplateColumnsD,
  getGridTemplateColumnsM,
  getGridTemplateColumnsT,
  getGridTemplateRowsD,
  getGridTemplateRowsM,
  getGridTemplateRowsT,
  getPadding,
} from '@wowjob/util'

export const SGrid = styled.div<$TGrid>`
  display: grid;

  ${getGridTemplateColumnsM}
  ${getGridTemplateRowsM}
  ${getGap}
  ${getPadding}
  
  @media screen  and (min-width: 768px) {
    ${getGridTemplateColumnsT}
    ${getGridTemplateRowsT}
  }

  @media screen and (min-width: 1280px) {
    ${getGridTemplateColumnsD}
    ${getGridTemplateRowsD}
  }
`
