import { Icon, Text } from '@wowjob/atom'
import type { TIconButton } from '@wowjob/type'

export const IconButton = ({ icon, title, href, size, color }: TIconButton) => {
  return (
    <Text as="a" title={title} href={href}>
      <Icon icon={icon} size={size} color={color} />
    </Text>
  )
}
