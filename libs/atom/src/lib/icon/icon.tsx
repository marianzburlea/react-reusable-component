import { SIcon } from './icon.style'
import { TIcon } from './icon.type'

export const Icon = ({ icon, size }: TIcon) => {
  return <SIcon $icon={icon} $size={size} />
}
