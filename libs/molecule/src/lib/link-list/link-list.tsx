import { Box, Text } from '@wowjob/atom'
import type { TLinkList } from './link-list.type'

export const LinkList = ({ list, wrap }: TLinkList) => {
  return (
    <Box gap="s" padding="l" wrap={wrap} justify>
      {list?.map(({ color, href, label, size, title }) => (
        <Text as="a" href={href} title={title} size={size} color={color}>
          {label}
        </Text>
      ))}
    </Box>
  )
}
