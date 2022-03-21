import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Column from '../Column';
import CardsList from '../CardsList';
import Username from '../Username';

const Board: React.FC = () => {
  const columns = [
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
  ]

  const [username, setUsername] = useState("")
  const useUsername = (name: string) => {
    setUsername(name);
  }

  const [isUse, setIsUse] = useState(false)
  const useIsUse = () => {
    setIsUse(true);
  }

  const usernamePopUp = (!isUse) &&
    <Username username={username} useUsername={useUsername} useIsUse={useIsUse}/>

  const columnList = (isUse) && columns.map(column =>
    <Column columnTitle={column.columnTitle}>
      <CardsList cardListId={column.columnId} username={username}/>
    </Column>)

  return(
    <Body>
      <header>
        <h1>like-trello</h1>
      </header>
      <main>
        {usernamePopUp}
        {columnList}
      </main>
    </Body>
  )
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f9fb;
  margin: 0;
  font-family: consolas;

  header{
    h1{
      margin: 20px 20px 40px;
      color: #6e60ff;
      font-size: 42px;
      line-height: 42px;
      font-weight: 800;
    }
  }

  main{
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap:wrap;
  }
`

export default Board;
