export const enum ActionTypes {
  ADD_COMMENT = "ADD_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT"
}

export interface CommentType {
  cardId: number;
  id: number;
  author: string;
  text: string
}

export interface CommentsType {
  comments: Array<CommentType>
}
