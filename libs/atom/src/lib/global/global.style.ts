import styled, { createGlobalStyle } from 'styled-components';

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
  }
`;
