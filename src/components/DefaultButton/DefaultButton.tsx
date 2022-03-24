import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

interface DefaultButtonProps{
  buttonOnClick: () => void;
  buttonValue: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {

  return(
    <Button onClick={props.buttonOnClick}>{props.buttonValue}</Button>
  )
}

const Button = styled.button`
  min-width: 110px;
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
