// font.ts
export const textSizeMap = {
  text: {
    xxs: 12,
    xs: 14,
    s: 16,
    m: 18,
    l: 20,
    xl: 22,
    xxl: 22,
  },
  title: {
    xxs: 24,
    xs: 28,
    s: 32,
    m: 36,
    l: 40,
    xl: 44,
    xxl: 48,
  },
} as const

export const fontWeightList = [
  'normal',
  'bold',
  'lighter',
  'bolder',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const

export type TTextFontWeightType = (typeof fontWeightList)[number]
export type TTextSizeType = keyof typeof textSizeMap.text
