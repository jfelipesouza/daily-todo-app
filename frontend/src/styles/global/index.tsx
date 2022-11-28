import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 16px;
    font-family:"Rosario";
    font-weight: 400;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }
`
