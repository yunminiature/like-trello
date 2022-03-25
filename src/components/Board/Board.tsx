import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import DefaultModal from '../../ui/DefaultModal';
import Column from '../Column';
import CardsList from '../CardsList';
import UserName from '../UserName';
import {Local} from '../../services/LocalStorage'

const Board: React.FC = () => {

  useEffect(() => {
    (Local.getColumns()===null)
      && Local.setColumns(JSON.stringify([
         {
           columnId: 0,
           columnTitle:"ToDo"
         },
         {
           columnId: 1,
           columnTitle:"InProgress"
         },
         {
           columnId: 2,
           columnTitle:"Testing"
         },
         {
           columnId: 3,
           columnTitle:"Done"
         },
       ]))
  },[]);

  const [columns, setColumns] = useState(JSON.parse(Local.getColumns()))

  const editColumns = (id: number, title: string) => {
    columns[id].columnTitle=title;
    setColumns(columns);
    Local.setColumns(JSON.stringify(columns));
  }

  const [userName, setUserName] = useState("")
  const addUserName = (name: string) => {
    setUserName(name);
  }

  const [isAddUserName, setAddUserName] = useState(!(Local.getColumns()===null))
  const toggleAddUserName = () => {
    (userName!=="") && setAddUserName(true);
    Local.setUserName(userName);
  }

  const userNamePopUp = (!isAddUserName) &&
    <DefaultModal>
      <UserName userName={userName} addUserName={addUserName} toggleAddUserName={toggleAddUserName}/>
    </DefaultModal>

  const columnList = columns.map((column:{
    columnId: number;
    columnTitle:string
  }) =>
    <Column
      key={column.columnId}
      columnId={column.columnId}
      columnTitle={column.columnTitle}
      editColumns={editColumns}>
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
