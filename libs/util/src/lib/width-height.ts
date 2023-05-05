import { TWidthType, widthList } from '@wowjob/type'

const whList = ['width', 'height']
type whType = (typeof whList)[number]

export const getWH = (type: whType, $wh?: TWidthType) => {
  if (typeof $wh === 'string') {
    return `${type}: ${$wh};`
  } else if (typeof $wh === 'number') {
    return `${type}: ${$wh / 16}rem;`
  }

  return ''
}

export const getWidth = ({ $width }: { $width?: TWidthType }) =>
  getWH('width', $width)

export const getHeight = ({ $height }: { $height?: TWidthType }) =>
  getWH('height', $height)
