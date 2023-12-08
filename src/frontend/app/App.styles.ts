// GlobalStyles.ts
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #332828;
    color: #fff;
  }
`;
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MyLogo = styled.div`
  color: lightPink
`;

export const Header = styled.div`
  text-align: center;
  font-weight: 600;
  line-height: 1.1;
  color: #232333;
  font-size: 30px;
`

