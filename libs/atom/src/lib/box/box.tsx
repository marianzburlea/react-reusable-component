import { SBox } from './box.style'
import type { TBox, TExtraProps } from './box.type'

const Box = ({
  children,
  color,
  bgColor,
  fill,
  gap,
  gray,
  inline,
  vertical,
  padding,
  light,
  dark,
  size,
  radius,
  wrap,
  hidden,
  testId,
  describedBy,
  as = 'div',
  label = 'region',
  width,
  height,
  align,
  justify,
  position,
  inset,
  pointer,
  bgImage,
}: TBox) => {
  const extraProps: TExtraProps = {}

  if (describedBy) {
    extraProps['aria-describedby'] = describedBy
  }

  return (
    <SBox
      as={as}
      $gray={gray}
      $color={color}
      $bgColor={bgColor}
      $gap={gap}
      $fill={fill}
      $inline={inline}
      $vertical={vertical}
      $light={light}
      $dark={dark}
      $size={size}
      $radius={radius}
      $bgImage={bgImage}
      $wrap={wrap}
      $hidden={hidden}
      $pointer={pointer}
      $inset={inset}
      $padding={padding}
      $width={width}
      $height={height}
      $align={align}
      $position={position}
      $justify={justify}
      aria-label={label}
      data-testid={testId}
      {...extraProps}
    >
      {children}
    </SBox>
  )
}

export { Box }
