import { Aspect, Box, Button, Image } from '@wowjob/atom'
import { IconButton, LinkList } from '@wowjob/molecule'
import type { THeaderType } from './top-header.type'

export const TopHeader = ({ linkList }: THeaderType) => {
  return (
    <Box vertical align bgColor="background" width="100%" position="fixed">
      <Box align justify="space-between" width={1280}>
        <Box width={200}>
          <Aspect aspect="4/1">
            <Image
              alt="logo"
              src="https://picsum.photos/id/189/200/300"
              aspect="4/1"
            />
          </Aspect>
        </Box>

        <Box align>
          <Box>
            <LinkList list={linkList} />
          </Box>

          <Box align bgColor="primary" radius="huge">
            <IconButton
              icon="target"
              title="log in"
              href="#login"
              size="xl"
              color="background"
            />
          </Box>
        </Box>
      </Box>

      <Box bgColor="primary" height={4} width="100%" />
    </Box>
  )
}
