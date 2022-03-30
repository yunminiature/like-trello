import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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
 ];

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    editColumns(state, action) {}
  },
});

const {columnsActions, columnsReducer} = columnsSlice;

export const {
  editColumns
} = columnsActions;

export default columnsReducer;
