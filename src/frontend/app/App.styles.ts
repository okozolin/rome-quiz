// GlobalStyles.ts
import styled, { createGlobalStyle } from 'styled-components';
import {platformColors} from "../constants/colors.ts";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${platformColors.warmBlack};
    color: ${platformColors.white};
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
  font-size: 3vw;
`

