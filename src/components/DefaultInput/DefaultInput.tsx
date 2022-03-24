import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

interface DefaultInputProps{
  inputType: string;
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput: React.FC<DefaultInputProps> = (props) => {

  return(
    <Input type={props.inputType} value={props.inputValue} onChange={props.inputOnChange}/>
  )
}

const Input = styled.input`
  width: 100%;
  min-width: 100px;
  margin: 20px 0;
  padding: 5px 0;
  border: 0px;
  border-radius: 10px;
  font-family: consolas;
  font-size: 20px;
  line-height: 20px;
  color: #6e60ff;
`

export default DefaultInput;
