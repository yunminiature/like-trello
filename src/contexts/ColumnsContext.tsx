import React, {createContext, useState} from 'react';

import {Local} from '../services/LocalStorage'

export const ColumnsContext = createContext<{
  columns: {
    columnId: number,
    columnTitle:string
  }[],
  editColumns?: (id: number, title: string) => void,
}>({columns: [
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
});

export const ColumnsContextProvider: React.FC = ({children}) => {

  const [columns, setColumns] = useState(JSON.parse(Local.getColumns()))
  const editColumns = (id: number, title: string) => {
    setColumns(columns.map((column:{
      columnId: number;
      columnTitle:string
    }) =>
    {
      if (column.columnId===id) {
        column.columnTitle=title;
      }
    }));
    Local.setColumns(JSON.stringify(columns.map((column:{
      columnId: number;
      columnTitle:string
    }) =>
    {
      if (column.columnId===id) {
        column.columnTitle=title;
      }
    })));
  }


  return(
    <ColumnsContext.Provider value={{columns,editColumns}}>
      {children}
    </ColumnsContext.Provider>
  )
}
