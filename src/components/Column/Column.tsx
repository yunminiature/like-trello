import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';
import {ColumnsContext} from '../../contexts/ColumnsContext'

interface ColumnProps{
  columnId: number;
  columnTitle: string;
}

const Column: React.FC<ColumnProps> = (props) => {

  const {editColumns} = useContext(ColumnsContext);

  const [columnTitle, setColumnTitle] = useState(props.columnTitle)
  const editColumnTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  }

  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => {
    (isEdit) && editColumns(props.columnId, columnTitle)
    setIsEdit(!isEdit);
  }

  const title =
    <ColumnTitle>
      {(isEdit)
      ? <DefaultInput inputType="text" inputValue={columnTitle} inputOnChange={editColumnTitle}/>
      : <h2>{columnTitle}</h2>}
      <DefaultButton buttonOnClick={toggleIsEdit} buttonValue={isEdit ? "Сохранить" : "Изменить"}/>
    </ColumnTitle>

  return (
    <ColumnElement>
      {title}
      {props.children}
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
