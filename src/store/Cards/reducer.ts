import * as _ from "lodash"
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {CardsType, CardType} from './types';
import {
  addCard,
  deleteCard,
  editTitle,
  editDescription
} from './actions'


const initialState: CardsType = {
  cards:[
    { id: 0,
      columnId: 1,
      title: 'Накопить на слона',
      description: '',
      author:'noname',
      commentsCount: 2,
    },
    { id: 1,
      columnId: 3,
      title: 'Выбрать слона',
      description: '',
      author:'noname',
      commentsCount: 1,
    },
    { id: 2,
      columnId: 0,
      title: 'Купить слона',
      description: '',
      author:'noname',
      commentsCount: 0,
    },
  ]
};

const cardsReducer = createReducer<CardsType>(initialState, {
  [addCard.type]: (state, action: PayloadAction<CardType>) => {
    state.cards = _.concat(state.cards, {
      id: state.cards[state.cards.length - 1].id+1,
      columnId: action.payload.columnId,
      title: action.payload.title,
      description: action.payload.description,
      author:action.payload.author,
      commentsCount: 0
    })
  },

  [deleteCard.type]: (state, action: PayloadAction<number>) => {
    state.cards = _.remove(state.cards, function(card:CardType) {
      return card.id !== action.payload;
    })
  },

  [editTitle.type]: (state, action: PayloadAction<CardType>) => {
    state.cards.map((card:CardType) =>
    {
      if (card.id===action.payload.id) {
        card.title=action.payload.title;
      }
      return card
    })
  },

  [editDescription.type]: (state, action: PayloadAction<CardType>) => {
    state.cards.map((card:CardType) =>
    {
      if (card.id===action.payload.id) {
        card.description=action.payload.description;
      }
      return card
    })
  }
})

export default cardsReducer
