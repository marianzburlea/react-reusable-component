import {
  TTextAsType,
  TTextFontWeightType,
  TTextSizeType,
  textSizeMap,
} from '@wowjob/type'

type crossed = boolean
type ellipsis = boolean

export const getFontWeight = ({ $weight }: { $weight?: TTextFontWeightType }) =>
  $weight ? `font-weight: ${$weight};` : ''

export const getFontSize = ({
  $size = 'm',
  as = 'p',
}: {
  as?: TTextAsType
  $size?: TTextSizeType
}) => {
  const isTitle = as[0] === 'h'
  return $size
    ? `font-size: ${
        (isTitle ? textSizeMap.title[$size] : textSizeMap.text[$size]) / 16
      }rem;`
    : ''
}

export const getCrossed = ({ $crossed }: { $crossed?: crossed }) =>
  $crossed ? `text-decoration: line-through;` : ''

export const getEllipsis = ({ $ellipsis }: { $ellipsis?: ellipsis }) =>
  $ellipsis
    ? `
      white-space: nowrap;
      overflow-y: hidden;
      text-overflow: ellipsis;
    `
    : ''
