// aspect.style.ts

import styled from 'styled-components';
import type { $TAspect } from './aspect.type';

export const SAspect = styled.div<$TAspect>`
  aspect-ratio: 16/9;
  border: 12px solid green;
  width: 100%;
  height: 100%;
`;
