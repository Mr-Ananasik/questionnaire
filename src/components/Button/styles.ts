import styled from "styled-components";

interface IButtonStyled {
    width?: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
}

export const ButtonStyled = styled.button<IButtonStyled>`
  width: ${props => props.width ? props.width : '100px'};
  height: ${props => props.height ? props.height : '40px'};
  color: ${props => props.textColor ? props.textColor : 'black'};
  background: ${props => props.bgColor ? props.bgColor : 'lightgray'}; 
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`;