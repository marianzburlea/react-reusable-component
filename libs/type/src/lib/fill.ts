export const fillList = ['full', 'outline', 'none'] as const
export type TFillType = (typeof fillList)[number]
