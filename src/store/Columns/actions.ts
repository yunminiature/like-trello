import { createAction } from '@reduxjs/toolkit';
import {ActionTypes, ColumnType} from './types';

export const editColumnTitle = createAction<ColumnType>(ActionTypes.EDIT_COLUMN_TITLE)
