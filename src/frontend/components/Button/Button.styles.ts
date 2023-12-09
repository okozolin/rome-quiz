import styled from 'styled-components';
import {platformColors} from "../../constants/colors.ts";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  color: ${platformColors.pink};
  font-size: calc(6vw + 1rem);
  font-weight: 300;
  
  svg {
    padding-right: 1rem;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;