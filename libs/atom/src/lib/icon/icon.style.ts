import styled from 'styled-components'
import { $TIcon } from './icon.type'
import { colorMap, iconMap, iconSizeMap } from '@wowjob/type'
import { getColor } from '@wowjob/util'

export const getIconSymbol = ({ $icon }: $TIcon) =>
  `content: '${iconMap[$icon]}';`

export const getIconSize = ({ $size = 'm' }: $TIcon) =>
  `
  width: ${iconSizeMap[$size] / 16}rem;
  height: ${iconSizeMap[$size] / 16}rem;
  font-size: ${iconSizeMap[$size] / 32}rem;
`

export const SIcon = styled.span<$TIcon>`
  ${getIconSize}
  ${getColor}

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: 'reusable-component' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  cursor: pointer;
  transition: 250ms;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    background-color: hsla(
      ${colorMap.hover.h},
      ${colorMap.hover.s + '%'},
      ${colorMap.hover.l + '%'},
      1
    );
  }

  &:before {
    ${getIconSymbol}
  }
`
