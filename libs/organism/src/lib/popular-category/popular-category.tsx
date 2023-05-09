import { Box, Text } from '@wowjob/atom'
import type { TPopularCategory } from './popular-category.type'
import { Skill } from '@wowjob/molecule'

export const PopularCategory = ({ list }: TPopularCategory) => {
  return (
    <Box padding="m" radius="xl" width={1280} vertical align>
      <Text as="h2" size="xxs" color="primary">
        Browse our most popular categories
      </Text>

      <Box gap="l" padding="l" radius="xl" width={1280}>
        {list.map(({ icon, skill }) => (
          <Skill key={skill} icon={icon} skill={skill} />
        ))}
      </Box>
    </Box>
  )
}
