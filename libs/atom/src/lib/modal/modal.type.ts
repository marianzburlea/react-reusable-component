import type { ReactNode } from 'react'

export type TModal = {
  children?: ReactNode
  show?: boolean
  closeModal: () => void
}

export type $TModal = {
  children?: ReactNode
  $show?: boolean
}
