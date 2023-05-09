import styled from 'styled-components'

import type { $TModal } from './modal.type'
import { colorMap } from '@wowjob/type'

export const SModal = styled.dialog<$TModal>`
  width: 100vw;
  inset: 60px 0 0 0;
  height: calc(100vh - 60px);
  margin: 0;

  &:modal {
    max-width: 100vw;
    margin: auto;
  }

  border: 0;

  &::backdrop {
    inset: 60px 0 0 0;
    height: calc(100vh - 60px);
    padding: 0;
    position: fixed;
    margin: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    border: 4px solid
      hsla(
        ${colorMap.veryLightGray.h},
        ${colorMap.veryLightGray.s + '%'},
        ${colorMap.veryLightGray.l + '%'},
        1
      );

    &:modal {
      border-radius: 1rem;
    }

    height: calc(100vh - 20rem);
    width: calc(100vw - 20rem);
    padding: 1rem;

    &::backdrop {
      inset: 0;
    }
  }
`
