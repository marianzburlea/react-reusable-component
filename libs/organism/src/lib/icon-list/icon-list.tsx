import { Box, Icon, Text } from '@wowjob/atom'
import type { TLinkList } from './icon-list.type'

export const IconList = ({ list }: TLinkList) => {
  return (
    <Box gap="s" padding="xxs">
      {list?.map(({ href, icon, title }) => (
        <Box key={icon} bgColor="primary" radius="giant">
          <Text as="a" href={href} title={title}>
            <Icon icon={icon} color="background" size="xxxl" />
          </Text>
        </Box>
      ))}
    </Box>
  )
}
