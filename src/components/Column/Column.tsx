import React, {FC, useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
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

const Column:FC<ColumnProps> = ({columnId,columnTitle, children}) => {

  const {editColumns} = useContext(ColumnsContext);

  const {handleSubmit, control} = useForm<InputsColumns>()
  const onSubmit: SubmitHandler<InputsColumns> = data =>{
    editColumns?.(columnId, data.columnTitle)
  }

  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  }

  const title = (isEdit)
  ? <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="columnTitle"
        rules={{
          required:"Обязательное поле"
        }}
        render={({field:{onChange, value}}) => (
          <DefaultInput
            type="text"
            defaultValue={columnTitle}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <DefaultButton type="submit" onClick={toggleIsEdit} value="Сохранить"/>
    </form>
  : <>
      <h2>{columnTitle}</h2>
      <DefaultButton type="button" onClick={toggleIsEdit} value="Изменить"/>
    </>

  return (
    <ColumnElement>
      <ColumnTitle>
        {title}
      </ColumnTitle>
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
