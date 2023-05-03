import styled from 'styled-components';
import { $TIcon } from './icon.type';
import { iconMap } from '@wowjob/type';

export const getIconSymbol = ({ $icon }: $TIcon) =>
  `content: '${iconMap[$icon]}';`;

export const SIcon = styled.span<$TIcon>`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;

  font-family: 'reusable-component' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    ${getIconSymbol}
  }
`;
