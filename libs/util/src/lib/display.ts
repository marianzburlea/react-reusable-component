import { sizeMap } from '@wowjob/type'
import type {
  TBoxPositionType,
  TInset,
  TSizeType,
  TGapType,
} from '@wowjob/type'

type vertical = boolean
type hidden = boolean
type wrap = boolean

export const getGrow = ({ $grow }: { $grow?: number }) =>
  $grow ? `flex-grow: ${$grow};` : ''

export const getGap = ({ $gap }: { $gap?: TGapType }) =>
  $gap ? `gap: ${sizeMap[$gap] / 16}rem;` : ''

export const getGridTemplateColumns = (gtc?: string) =>
  gtc ? `grid-template-columns: ${gtc};` : ''

export const getGridTemplateColumnsM = ({ $gtcm }: { $gtcm?: string }) =>
  getGridTemplateColumns($gtcm)

export const getGridTemplateColumnsT = ({ $gtct }: { $gtct?: string }) =>
  getGridTemplateColumns($gtct)

export const getGridTemplateColumnsD = ({ $gtcd }: { $gtcd?: string }) =>
  getGridTemplateColumns($gtcd)

export const getGridTemplateRows = (gtr?: string) =>
  gtr ? `grid-template-rows: ${gtr};` : ''

export const getGridTemplateRowsM = ({ $gtrm }: { $gtrm?: string }) =>
  getGridTemplateRows($gtrm)

export const getGridTemplateRowsT = ({ $gtrt }: { $gtrt?: string }) =>
  getGridTemplateRows($gtrt)

export const getGridTemplateRowsD = ({ $gtrd }: { $gtrd?: string }) =>
  getGridTemplateRows($gtrd)

export const getVertical = ({ $vertical }: { $vertical?: vertical }) =>
  $vertical ? `flex-direction: column;` : ''

export const getWrap = ({ $wrap }: { $wrap?: wrap }) =>
  $wrap ? `flex-wrap: wrap;` : ''

export const getRadius = ({ $radius }: { $radius?: TSizeType }) =>
  $radius ? `border-radius: ${sizeMap[$radius] / 32}rem;` : ''

export const getHidden = ({ $hidden }: { $hidden?: hidden }) =>
  $hidden
    ? `
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  `
    : ''

export const getPosition = ({ $position }: { $position?: TBoxPositionType }) =>
  $position ? `position: ${$position};` : ''

export const getInset = ({ $inset }: { $inset?: TInset[] }) =>
  $inset
    ? `inset: ${$inset
        .map((pos) => (pos === 'auto' || pos === 0 ? pos : `${pos / 16}rem`))
        .join(' ')};`
    : ''
