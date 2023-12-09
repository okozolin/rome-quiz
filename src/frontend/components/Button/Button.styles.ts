import styled from 'styled-components';
import {platformColors} from "../../constants/colors.ts";

export const StyledButton = styled.button`
  padding: 0 1.5rem;
  width: fit-content;
  color: ${platformColors.pink};
  font-size: calc(6vw + 1rem);
  font-weight: 300;

  &[disabled] {
    cursor: not-allowed;
  }
`;