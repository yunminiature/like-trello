import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
      cardId: 0,
      id: 0,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Сколько стоит слон?',
    },
    {
      cardId: 0,
      id: 1,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Много.',
    },
    {
      cardId: 1,
      id: 2,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Выбрал индийского',
    }];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, id, text) => {[...state.comments, {
      cardId: id,
      id: state.comments[state.comments.length - 1].id+1,
      cardCommentAuthor: Local.getUserName(),
      cardCommentText: text
    }]},
    deleteComment: (state, id) => {[...state.comments.filter((item:{
      cardId: number,
      id: number,
      cardCommentAuthor: string,
      cardCommentText: string,
    }) => item.id !== id)]}
  },
});

const {commentsActions, commentsReducer} = commentsSlice;

export const {
  addComment,
  deleteComment
} = commentsActions;

export default commentsReducer;
