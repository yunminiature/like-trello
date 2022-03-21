import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Column: React.FC<{
  columnTitle: string;
}> = (props) => {

  const [columnTitle, setColumnTitle] = useState(props.columnTitle)
  const editColumnTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  }

  const [isEdit, setIsEdit] = useState(false)
  const editBtn = () => {
    setIsEdit(!isEdit);
  }

  const title = (isEdit)
    ?<input type="text" value={columnTitle} onChange={editColumnTitle}></input>
    :<h2>{columnTitle}</h2>;

  return (
    <ColumnElement>
      <div>
        {title}
        <button onClick={editBtn}>{isEdit ? "Сохранить" : "Изменить"}</button>
      </div>
      {props.children}
    </ColumnElement>
  )
}

const ColumnElement = styled.div`
  width: 20%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input, h2, button {
      min-width: 110px;
      border: 0px;
      border-radius: 10px;
      font-family: consolas;
    }

    input, h2{
      margin: 20px 0;
      padding: 5px 0;
      font-size: 20px;
      line-height: 20px;
      color: #6e60ff;
    }

    input{
      margin: 18px 0;
    }

    button{
      padding: 12px 20px;
      font-size: 16px;
      line-height: 16px;
      text-align: left;
      color: #fff;
      background-color: #6e60ff;
    }
  }
`

export default Column;
