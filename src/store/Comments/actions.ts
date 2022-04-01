import { createAction } from '@reduxjs/toolkit';
import {ActionTypes, CommentType} from './types';

export const addComment = createAction<CommentType>(ActionTypes.ADD_COMMENT)
export const deleteComment = createAction<number>(ActionTypes.DELETE_COMMENT)
