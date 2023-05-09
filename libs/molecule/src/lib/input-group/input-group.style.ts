import styled from 'styled-components'

export const SInputGroup = styled.div`
  display: flex;
  width: 100%;
  /* grid-template-columns: 1fr auto; */
  height: fit-content;
  align-items: center;

  & div:first-child {
    flex-grow: 1;
  }

  & input:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    position: relative;
    right: -2px;
    flex-grow: 1;
  }

  & button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    /* height: max-content; */
  }
`
