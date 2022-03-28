import React from 'react';
import styled from 'styled-components';

interface DefaultButtonProps{
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  value?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({type, onClick, value}) => {

  return(
    <Button type={type} onClick={onClick}>{value}</Button>
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
