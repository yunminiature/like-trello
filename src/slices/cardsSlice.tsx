import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { cardId: 0,
      columnId: 1,
      cardTitle: 'Накопить на слона',
      cardDescription: '',
      cardAuthor:'noname',
      cardCommentsValue: 2,
    },
    { cardId: 1,
      columnId: 3,
      cardTitle: 'Выбрать слона',
      cardDescription: '',
      cardAuthor:'noname',
      cardCommentsValue: 1,
    },
    { cardId: 2,
      columnId: 0,
      cardTitle: 'Купить слона',
      cardDescription: '',
      cardAuthor:'noname',
      cardCommentsValue: 0,
    },
  ]

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {},
    deleteCard(state, action) {},
    editCardTitle(state, action) {},
    editCardDescription(state, action) {},
  },
});

const {cardsActions, cardsReducer} = cardsSlice;

export const {
  addCard,
  deleteCard,
  editCardTitle,
  editCardDescription
} = cardsActions;

export default cardsReducer;
