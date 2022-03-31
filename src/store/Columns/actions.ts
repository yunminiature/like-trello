import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

interface editColumnTitle{
  id: number;
  title: string;
}

export const editColumnTitle = createAction<editColumnTitle>(ActionTypes.EDIT_COLUMN_TITLE)
