import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './slices/commentsSlice'
import cardsReducer from './slices/cardsReducer'
import columnsReducer from './slices/columnsReducer'
import userNameReducer from './slices/userNameReducer'

const store = configureStore({
  comments: commentsReducer,
  cards: cardsReducer,
  columns: columnsReducer,
  userName: userNameReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
