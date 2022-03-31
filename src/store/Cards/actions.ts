import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

export const addCard = createAction<string>(ActionTypes.ADD_CARD)
export const deleteCard = createAction<number>(ActionTypes.DELETE_CARD)
export const editTitle = createAction<string>(ActionTypes.EDIT_TITLE)
export const editDescription = createAction<string>(ActionTypes.EDIT_DESCRIPTION)
