export const enum ActionTypes {
  EDIT_COLUMN_TITLE = "EDIT_COLUMN_TITLE"
}

export interface ColumnType {
  id?: number,
  title?: string,
}

export interface ColumnsType {
  columns: Array<ColumnType>
}
