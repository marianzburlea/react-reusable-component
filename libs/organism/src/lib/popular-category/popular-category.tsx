import { Box } from '@wowjob/atom'
import type { TPopularCategory } from './popular-category.type'
import { Skill } from '@wowjob/molecule'

export const PopularCategory = ({ list }: TPopularCategory) => {
  return (
    <Box gap="l" padding="l" radius="xl" bgColor="background" width={1280}>
      {list.map(({ icon, skill }) => (
        <Skill key={skill} icon={icon} skill={skill} />
      ))}
    </Box>
  )
}
