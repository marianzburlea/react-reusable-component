import { Box, Button, Grid, Image, Text } from '@wowjob/atom'
import type { TCardList } from './card-list.type'

export const CardList = ({ list }: TCardList) => {
  return (
    <Box
      align
      gap="xl"
      width={1280}
      justify="space-between"
      radius="xl"
      bgColor="background"
      padding="l"
    >
      <Grid gap="l" gtct="1fr 1fr 1fr" gtcm="1fr">
        {list.map(
          ({ cta: { bgColor, color, label }, logo, message, title }) => (
            <Box vertical gap="s" width="100%">
              <Box width="100%">
                <Image alt="logo" src={logo} aspect="16/9" />
              </Box>

              <Box vertical gap="s">
                <Text as="h3" size="s" color="primary">
                  {title}
                </Text>

                <Text>{message}</Text>
              </Box>

              <Button
                bgColor={bgColor}
                color={color}
                padding="s"
                radius="normal"
                justify
              >
                {label}
              </Button>
            </Box>
          )
        )}
      </Grid>
    </Box>
  )
}
