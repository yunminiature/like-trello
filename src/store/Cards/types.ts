export const enum ActionTypes {
  ADD_CARD = "ADD_CARD",
  DELETE_CARD = "DELETE_CARD",
  EDIT_TITLE = "EDIT_TITLE",
  EDIT_DESCRIPTION = "EDIT_DESCRIPTION"
}

export interface CardType {
  id: number,
  columnId: number,
  title: string,
  description: string,
  author: string,
  commentsValue: number
}

export interface CardsType {
  cards: Array<CardType>
}
