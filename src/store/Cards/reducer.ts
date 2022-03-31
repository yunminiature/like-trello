import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Local} from '../../services/LocalStorage'
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
      commentsValue: 2,
    },
    { id: 1,
      columnId: 3,
      title: 'Выбрать слона',
      description: '',
      author:'noname',
      commentsValue: 1,
    },
    { id: 2,
      columnId: 0,
      title: 'Купить слона',
      description: '',
      author:'noname',
      commentsValue: 0,
    },
  ]
};

const cardsReducer = createReducer<CardsType>(initialState, {
  [addCard.type]: (state, action: PayloadAction<CardType>) => {
    [...state.cards, {
      id: state.cards[state.cards.length - 1].id+1,
      columnId: action.payload.columnId,
      title: action.payload.title,
      description: action.payload.description,
      author:Local.getUserName(),
      commentsValue: 0
    }]
  },

  [deleteCard.type]: (state, action: PayloadAction<CardType>) => {
    [...state.cards.filter((item:{
      id: number;
      columnId: number;
      title: string;
      description: string;
      author: string;
      commentsValue: number;
    }) => item.id !== action.payload.id)]
  },

  [editTitle.type]: (state, action: PayloadAction<CardType>) => {
    state.cards.map((card:{
      id: number,
      columnId: number,
      title: string,
      description: string,
      author:string,
      commentsValue: number,
    }) =>
    {
      if (card.id===action.payload.id) {
        card.title=action.payload.title;
      }
      return card
    })
  },

  [editDescription.type]: (state, action: PayloadAction<CardType>) => {
    state.cards.map((card:{
      id: number,
      columnId: number,
      title: string,
      description: string,
      author:string,
      commentsValue: number,
    }) =>
    {
      if (card.id===action.payload.id) {
        card.description=action.payload.description;
      }
      return card
    })
  }
})

export default cardsReducer
