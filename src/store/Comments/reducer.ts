import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Local} from '../../services/LocalStorage'
import {CommentsType, CommentType} from './types';
import {
  addComment,
  deleteComment
} from './actions'


const initialState: CommentsType = {
  comments:[
    {
      cardId: 0,
      id: 0,
      author: 'noname',
      text: 'Сколько стоит слон?',
    },
    {
      cardId: 0,
      id: 1,
      author: 'noname',
      text: 'Много.',
    },
    {
      cardId: 1,
      id: 2,
      author: 'noname',
      text: 'Выбрал индийского',
    }
  ]
};

const commentsReducer = createReducer<CommentsType>(initialState, {
  [addComment.type]: (state, action: PayloadAction<CommentType>) => {
    comments: [...state.comments,
      {
        cardId: action.payload.cardId,
        id: state.comments[state.comments.length - 1].id+1,
        author: Local.getUserName(),
        text: action.payload.text
      },
    ]
  },
  [deleteComment.type]: (state, action: PayloadAction<CommentType>) => {
    [...state.comments.filter((item:{
      cardId: number,
      id: number,
      author: string,
      text: string,
    }) => item.id !== action.payload.id)]}
});

export default commentsReducer
