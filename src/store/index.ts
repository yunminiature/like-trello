import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { commentsReducer } from './Comments/index';
import { cardsReducer } from './Cards/index';
import { columnsReducer } from './Columns/index';
import { userNameReducer } from './UserName/index';

const RootReducer = combineReducers({
  comments: commentsReducer,
  cards: cardsReducer,
  columns: columnsReducer,
  userName: userNameReducer
});

const store = configureStore({
  reducer: RootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
