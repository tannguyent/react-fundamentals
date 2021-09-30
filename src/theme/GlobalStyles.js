import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray800};
    font-family: ${({ theme }) => theme.fonts.body};
    text-rendering: optimizeLegibility;
  }
`