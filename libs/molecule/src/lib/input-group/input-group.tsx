import { Button, Input } from '@wowjob/atom'
import { SInputGroup } from './input-group.style'
import type { TInputGroup } from './input-group.type'

export const InputGroup = ({ click }: TInputGroup) => {
  const handleClick = () => {
    if (typeof click === 'function') {
      click()
    }
  }

  return (
    <SInputGroup>
      <Input
        click={handleClick}
        placeholder="Trade (eg: Actor)"
        size="xxl"
        padding="m"
      />

      <Button
        color="background"
        bgColor="danger"
        size="xl"
        radius="normal"
        padding="m"
        click={handleClick}
      >
        Search
      </Button>
    </SInputGroup>
  )
}
