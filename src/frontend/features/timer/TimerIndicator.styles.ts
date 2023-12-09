import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 2rem;
  
  svg {
    padding-right: 6px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`