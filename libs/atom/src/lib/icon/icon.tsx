import { SIcon } from './icon.style'
import { TIcon } from './icon.type'

export const Icon = ({ icon, size, color, round }: TIcon) => {
  return <SIcon $icon={icon} $size={size} $color={color} $round={round} />
}
