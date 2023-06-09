import { colorMap } from '@wowjob/type'
import styled, { createGlobalStyle } from 'styled-components'

// https://fonts.google.com/specimen/Roboto?query=robo
export const SReset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: hsla(${colorMap.veryLightGray.h}, ${colorMap.veryLightGray.s}%, ${colorMap.veryLightGray.l}%, 1);
  }
  
  @media screen and (prefers-color-scheme: dark) {
    body {
      background-color: hsla(${colorMap.darkGray.h}, ${colorMap.darkGray.s}%, ${colorMap.darkGray.l}%, 1);
    }
  }
`

export const SFont = createGlobalStyle`
  @font-face {
    font-family: 'reusable-component';
    src:
      url('/font/rc.ttf?2fmd7x') format('truetype'),
      url('/font/rc.woff?2fmd7x') format('woff'),
      url('/font/rc.svg?2fmd7x#rc') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

`
