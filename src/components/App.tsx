import React from 'react';

import Board from './Board';
import {UserNameContextProvider} from '../contexts/UserNameContext'
import {ColumnsContextProvider} from '../contexts/ColumnsContext'
import {CardsContextProvider} from '../contexts/CardsContext'

const App = () => {
  return (
    <UserNameContextProvider>
      <ColumnsContextProvider>
        <CardsContextProvider>
          <Board/>
        </CardsContextProvider>
      </ColumnsContextProvider>
    </UserNameContextProvider>
  )
}

export default App;
