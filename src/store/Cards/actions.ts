import { createAction } from '@reduxjs/toolkit';
import {ActionTypes, CardType} from './types';

export const addCard = createAction<CardType>(ActionTypes.ADD_CARD)
export const deleteCard = createAction<number>(ActionTypes.DELETE_CARD)
export const editTitle = createAction<CardType>(ActionTypes.EDIT_TITLE)
export const editDescription = createAction<CardType>(ActionTypes.EDIT_DESCRIPTION)
export const addCommentsCount = createAction<number>(ActionTypes.ADD_COMMENTS_COUNT)
export const deleteCommentsCount = createAction<number>(ActionTypes.DELETE_COMMENTS_COUNT)
