import { SText } from './text.style'
import type { TText } from './text.type'

const Text = ({
  children,
  as,
  color,
  crossed,
  ellipsis,
  size,
  testId,
  editable,
  href,
  title,
  weight,
  grow,
}: TText) => {
  return (
    <SText
      as={as}
      href={href}
      title={title}
      data-testid={testId}
      $color={color}
      $weight={weight}
      $grow={grow}
      $crossed={crossed}
      $ellipsis={ellipsis}
      $size={size}
      contentEditable={editable}
    >
      {children}
    </SText>
  )
}

export { Text }
