export const buttonTypeList = ['button', 'submit', 'reset'] as const
export const buttonRadiusList = ['none', 'normal', 'pill'] as const

export type TButtonType = (typeof buttonTypeList)[number]
export type TButtonRadiusType = (typeof buttonRadiusList)[number]
