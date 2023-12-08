import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0 1.5rem;
  width: fit-content;
  color: #c931e3;
  font-size: 4rem;
  font-weight: 3;

  &[disabled] {
    cursor: not-allowed;
  }
`;