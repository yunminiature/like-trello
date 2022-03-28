import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import DefaultModal from '../../ui/DefaultModal';
import Column from '../Column';
import CardsList from '../CardsList';
import UserName from '../UserName';
import {Local} from '../../services/LocalStorage'
import {ColumnsContext} from '../../contexts/ColumnsContext'

const Board: React.FC = () => {

  const {columns} = useContext(ColumnsContext);

  const userNamePopUp = (Local.getUserName()===null) &&
    <DefaultModal>
      <UserName/>
    </DefaultModal>

  const columnList = columns.map((column:{
    columnId: number;
    columnTitle:string
  }) =>
    <Column
      key={column.columnId}
      columnId={column.columnId}
      columnTitle={column.columnTitle}>
      <CardsList cardListId={column.columnId}/>
    </Column>)

  return(
    <Body>
      <header>
        <BoardTitle>like-trello</BoardTitle>
      </header>
      <main>
        {userNamePopUp}
        {columnList}
      </main>
    </Body>
  )
}

const Body = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  background-color: #f6f9fb;
  margin: 0;
  font-family: consolas;

  main{
    height: 100%;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap:wrap;
  }
`
const BoardTitle = styled.h1`
  margin: 20px 20px 40px;
  color: #6e60ff;
  font-size: 42px;
  line-height: 42px;
  font-weight: 800;
`

export default Board;
