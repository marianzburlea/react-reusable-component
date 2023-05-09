import type { TNotInteractive } from './not-interactive.type'
import { SNotInteractive } from './not-interactive.style'

export const NotInteractive = ({ children }: TNotInteractive) => (
  <SNotInteractive>{children}</SNotInteractive>
)
