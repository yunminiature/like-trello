import { createAction } from '@reduxjs/toolkit';
import {ActionTypes, CardType} from './types';

export const addCard = createAction<CardType>(ActionTypes.ADD_CARD)
export const deleteCard = createAction<number>(ActionTypes.DELETE_CARD)
export const editTitle = createAction<CardType>(ActionTypes.EDIT_TITLE)
export const editDescription = createAction<CardType>(ActionTypes.EDIT_DESCRIPTION)
