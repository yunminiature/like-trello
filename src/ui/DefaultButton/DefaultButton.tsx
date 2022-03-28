import React from 'react';
import styled from 'styled-components';

interface DefaultButtonProps{
  buttonType: "button" | "submit" | "reset" | undefined;
  buttonOnClick?: () => void;
  buttonValue?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({buttonType, buttonOnClick, buttonValue}) => {

  return(
    <Button type={buttonType} onClick={buttonOnClick}>{buttonValue}</Button>
  )
}

const Button = styled.button`
  min-width: 110px;
  margin: 20px 0 0;
  padding: 12px 20px;
  border: 0px;
  border-radius: 10px;
  font-family: consolas;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  color: #fff;
  background-color: #6e60ff;
`

export default DefaultButton;
