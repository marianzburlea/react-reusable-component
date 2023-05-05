import { Aspect, Box, Button, Image, Text } from '@wowjob/atom'
import { LinkList } from '@wowjob/molecule'
import type { THeaderType } from './footer.type'
import { IconList } from '../icon-list'

export const Footer = ({ linkList, iconList }: THeaderType) => {
  return (
    <Box vertical align bgColor="background" width="100%">
      <Box bgColor="primary" height={4} width="100%" />

      <Box align justify="space-between" width={1280}>
        <Box align>
          <Box>
            <LinkList list={linkList} wrap />
          </Box>
        </Box>
      </Box>

      <IconList list={iconList} />

      <Box padding="l">
        <Text>© MyWebsite.com all rights reserved</Text>
      </Box>
    </Box>
  )
}
