import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

interface NewCard{
  title: string;
  description: string;
}
interface EditTitle{
  id: number;
  title: string;
}
interface EditDescription{
  id: number;
  description: string;
}

export const addCard = createAction<NewCard>(ActionTypes.ADD_CARD)
export const deleteCard = createAction<number>(ActionTypes.DELETE_CARD)
export const editTitle = createAction<EditTitle>(ActionTypes.EDIT_TITLE)
export const editDescription = createAction<EditDescription>(ActionTypes.EDIT_DESCRIPTION)
