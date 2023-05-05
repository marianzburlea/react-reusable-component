import { Box, Button, Image, Text } from '@wowjob/atom'
import type { TGuaranteedBanner } from './guaranteeed-banner.type'

export const GuaranteeedBanner = ({ info }: TGuaranteedBanner) => {
  const {
    logo,
    message,
    title,
    cta: { color, label, bgColor },
  } = info

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
      <Box gap="l" align>
        <Box width={128} radius="colossal">
          <Image alt="logo" src={logo} aspect="1" />
        </Box>

        <Box vertical gap="s">
          <Text as="h1" color="primary">
            {title}
          </Text>

          <Text>{message}</Text>
        </Box>
      </Box>

      <Button bgColor={bgColor} color={color} padding="s" radius="normal">
        {label}
      </Button>
    </Box>
  )
}
