import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

export const editColumnTitle = createAction<string>(ActionTypes.EDIT_COLUMN_TITLE)
