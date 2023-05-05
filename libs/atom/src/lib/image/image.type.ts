const loadingList = ['eager', 'lazy'] as const
type LoadingType = (typeof loadingList)[number]

export type TImage = {
  srcset?: boolean
  aspect?: string
  width?: number
  height?: number
  alt: string
  label?: string
  labelledBy?: string
  title?: string
  src: string
  loading?: LoadingType
  testId?: string
}

export type $TImage = {
  $aspect?: string
  width?: number
  height?: number
  alt: string
  title?: string
  src: string
  loading?: LoadingType
  $srcset?: boolean
  srcset?: string
}
