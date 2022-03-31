import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

export const addComment = createAction<string>(ActionTypes.ADD_COMMENT)
export const deleteComment = createAction<number>(ActionTypes.DELETE_COMMENT)
