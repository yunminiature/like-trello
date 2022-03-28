import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ColumnsContext} from '../../contexts/ColumnsContext'

import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface ColumnProps{
  columnId: number;
  columnTitle: string;
}

interface InputsColumns{
  columnTitle: string;
}

const Column: React.FC<ColumnProps> = ({columnId,columnTitle, children}) => {

  const {editColumns} = useContext(ColumnsContext);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsColumns>()
  const onSubmit: SubmitHandler<InputsColumns> = data =>{
    editColumns?.(columnId, data.columnTitle);
    setIsEdit(!isEdit)
  }

  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  }

  const title = (isEdit)
  ? <ColumnTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput {...register("columnTitle")} inputType="text" inputDefaultValue={columnTitle}/>
        <DefaultButton buttonType="submit" buttonValue="Сохранить"/>
      </form>
    </ColumnTitle>
  : <ColumnTitle>
      <h2>{columnTitle}</h2>
      <DefaultButton buttonType="button" buttonOnClick={toggleIsEdit} buttonValue="Изменить"></DefaultButton>
    </ColumnTitle>

  return (
    <ColumnElement>
      {title}
      {children}
    </ColumnElement>
  )
}

const ColumnElement = styled.div`
  width: 20%;
  }
`
const ColumnTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2{
    min-width: 110px;
    margin: 20px 0;
    padding: 5px 0;
    font-size: 20px;
    line-height: 20px;
    color: #6e60ff;
  }

  input{
    font-weight: 600;
  }
`

export default Column;
