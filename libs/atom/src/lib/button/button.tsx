import { SButton } from './button.style'
import type { TButton } from './button.type'

export const Button = ({
  children,
  gap,
  size,
  type,
  width,
  padding,
  radius,
}: TButton) => {
  return (
    <SButton
      $gap={gap}
      $size={size}
      type={type}
      $width={width}
      $padding={padding}
      $radius={radius}
    >
      {children}
    </SButton>
  )
}
