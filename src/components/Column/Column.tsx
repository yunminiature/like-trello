import React, {FC, useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useSelector, useDispatch} from 'react-redux'
import type {AppDispatch} from '../../store/index'
import {editColumnTitle} from '../../store/Columns/actions'

import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface ColumnProps{
  id: number;
  title: string;
}

interface InputsColumns{
  title: string;
}

const Column:FC<ColumnProps> = ({id, title, children}) => {

  const dispatch = useDispatch<AppDispatch>();

  const {handleSubmit, control} = useForm<InputsColumns>()
  const onSubmit: SubmitHandler<InputsColumns> = data =>{
    dispatch(editColumnTitle({
      id: id,
      title: data.title
    }));
    toggleIsEdit()
  }

  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  }

  const titleForm = (isEdit)
  ? <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        rules={{
          required:"Обязательное поле"
        }}
        render={({field:{onChange, value}}) => (
          <DefaultInput
            type="text"
            defaultValue={title}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <DefaultButton type="submit" value="Сохранить"/>
    </form>
  : <>
      <h2>{title}</h2>
      <DefaultButton type="button" onClick={toggleIsEdit} value="Изменить"/>
    </>

  return (
    <ColumnElement>
      <ColumnTitle>
        {titleForm}
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

  form{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

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
