import React from 'react';

import Board from './Board';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Board/>
    </Provider>
  )
}

export default App;
