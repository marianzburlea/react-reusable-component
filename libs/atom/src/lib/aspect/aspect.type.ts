// aspect.type.ts

import type { ReactNode } from 'react';

export type TAspect = {
  children?: ReactNode;
  aspect?: string;
};

export type $TAspect = {
  children?: ReactNode;
  $aspect?: string;
};
