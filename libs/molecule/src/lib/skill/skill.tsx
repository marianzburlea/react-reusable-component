import { Aspect, Box, Icon, NotInteractive, Text } from '@wowjob/atom'
import type { TSkill } from '@wowjob/type'

export const Skill = ({ icon, skill }: TSkill) => {
  return (
    <Box
      vertical
      align
      justify="space-evenly"
      width="100%"
      bgColor="background"
      radius="s"
      pointer="pointer"
    >
      <NotInteractive>
        <Aspect aspect="1">
          <Icon icon={icon} size="xxxl" color="danger" round />
          <Text size="l" weight="bold">
            {skill}
          </Text>
        </Aspect>
      </NotInteractive>
    </Box>
  )
}
