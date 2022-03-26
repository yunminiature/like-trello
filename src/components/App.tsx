import React from 'react';

import Board from './Board';
import {UserNameContextProvider} from '../contexts/UserNameContext'
import {ColumnsContextProvider} from '../contexts/ColumnsContext'
import {CardsContextProvider} from '../contexts/CardsContext'
import {CommentsContextProvider} from '../contexts/CommentsContext'

const App = () => {
  return (
    <UserNameContextProvider>
      <ColumnsContextProvider>
        <CardsContextProvider>
          <CommentsContextProvider>
            <Board/>
          </CommentsContextProvider>
        </CardsContextProvider>
      </ColumnsContextProvider>
    </UserNameContextProvider>
  )
}

export default App;
