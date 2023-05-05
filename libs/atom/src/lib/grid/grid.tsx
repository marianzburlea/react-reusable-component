import type { TGrid } from './grid.type'
import { SGrid } from './grid.style'

export const Grid = ({
  children,
  gap,
  gtcm,
  gtrm,
  gtcd,
  gtct,
  gtrd,
  gtrt,
  padding,
  width,
}: TGrid) => {
  return (
    <SGrid
      $gap={gap}
      $gtcm={gtcm}
      $gtrm={gtrm}
      $gtct={gtct}
      $gtrt={gtrt}
      $gtcd={gtcd}
      $gtrd={gtrd}
      $padding={padding}
      $width={width}
    >
      {children}
    </SGrid>
  )
}
