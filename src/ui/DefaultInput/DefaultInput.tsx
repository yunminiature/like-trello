import React from 'react';
import styled from 'styled-components';

interface DefaultInputProps{
  label?: string;
  type: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput: React.FC<DefaultInputProps> = ({label, type, defaultValue, onChange}) => {

  return(
    <Label>
      <h3>{label}</h3>
      <Input type={type} defaultValue={defaultValue} onChange={onChange}/>
    </Label>
  )
}

const Label = styled.label`

`

const Input = styled.input`
  width: 100%;
  min-width: 100px;
  margin: 20px 0;
  padding: 5px 10px;
  border: 0px;
  border-radius: 10px;
  font-family: consolas;
  font-size: 20px;
  line-height: 20px;
  color: #6e60ff;
`

export default DefaultInput;
