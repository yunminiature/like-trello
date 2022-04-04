import * as _ from "lodash"
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
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
    state.comments = _.concat(state.comments, {
      cardId: action.payload.cardId,
      id: state.comments[state.comments.length - 1].id+1,
      author: action.payload.author,
      text: action.payload.text
    })
  },

  [deleteComment.type]: (state, action: PayloadAction<number>) => {
    state.comments = _.remove(state.comments, function(comment:CommentType) {
      return comment.id !== action.payload;
    })
  }
});

export default commentsReducer
