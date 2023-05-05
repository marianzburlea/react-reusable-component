import { TColorType } from '../color'

export type TBanner = {
  title: string
  message: string
  cta: {
    label: string
    color: TColorType
    bgColor: TColorType
  }
  logo: string
}
