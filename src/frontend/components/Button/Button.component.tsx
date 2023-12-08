// import React from 'react';
// import styled from 'styled-components';
//
// const ButtonContainer = styled.button`
//   padding: 0 1.5rem;
//   box-sizing: border-box;
//   width: fit-content;
//   color: inherit;
//   font-size: 10rem;
//   font-weight: 3;
//
//   &[disabled] {
//     cursor: not-allowed;
//   }
//
//   //& button.ant-btn {
//   //  font-style: inherit;
//   //  background-color: transparent;
//   //  border: 0;
//   //  padding: 0;
//   //  color: inherit;
//   //  font-size: inherit;
//   //  font-weight: inherit;
//   //  transition: none;
//   //
//   //  &[disabled] {
//   //    background-color: transparent;
//   //    color: currentColor;
//   //  }
//   //
//   //  & > span {
//   //    color: currentColor;
//   //    font-size: inherit;
//   //    font-weight: inherit;
//   //  }
//   //}
// `;
//
// function ButtonComponent({
//     label,
//     onClick,
//     disabled,
//     ...props
// }) {
//     const onClickFn = disabled ? () => {} : onClick;
//     return (
//         <ButtonContainer {...props} onClick={onClickFn} disabled={disabled}>
//             {label}
//         </ButtonContainer>
//     );
// }
//
// export default ButtonComponent;


import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;