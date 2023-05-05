import { Aspect, Box, Icon, Text } from '@wowjob/atom'
import type { TSkill } from '@wowjob/type'

export const Skill = ({ icon, skill }: TSkill) => {
  return (
    <Box vertical align justify="space-evenly" width="100%">
      <Aspect aspect="1">
        <Icon icon={icon} size="xxxl" color="danger" />

        <Text size="l" weight="bold">
          {skill}
        </Text>
      </Aspect>
    </Box>
  )
}
