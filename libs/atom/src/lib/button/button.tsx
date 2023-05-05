// button.tsx
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
  color,
  bgColor,
  align,
  justify,
}: TButton) => {
  return (
    <SButton
      $gap={gap}
      $align={align}
      $justify={justify}
      $color={color}
      $bgColor={bgColor}
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
