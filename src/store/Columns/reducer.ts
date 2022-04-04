import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {ColumnsType, ColumnType} from './types';
import {
  editColumnTitle
} from './actions'


const initialState: ColumnsType = {
  columns:[
    {
     id: 0,
     title:"ToDo"
    },
    {
     id: 1,
     title:"InProgress"
   },
   {
     id: 2,
     title:"Testing"
   },
   {
     id: 3,
     title:"Done"
   },
  ]
};

const columnsReducer = createReducer<ColumnsType>(initialState, {
  [editColumnTitle.type]: (state, action: PayloadAction<ColumnType>) => {
    state.columns.map((column:ColumnType) =>
    {
      if (column.id===action.payload.id) {
        column.title=action.payload.title;
      }
      return column
    })
  }
})

export default columnsReducer
