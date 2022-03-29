import React, {createContext, useState} from 'react';

import {Local} from '../services/LocalStorage'

export const CardsContext = createContext<{
  cards: {
    cardId: number,
    columnId: number,
    cardTitle: string,
    cardDescription: string,
    cardAuthor: string,
    cardCommentsValue: number,
  }[],
  addCard?: (cardListId: number, cardTitle: string, cardDescription: string) => void,
  deleteCard?: (cardId: number) => void,
  editTitle?: (id: number, title: string) => void,
  editDescription?: (id: number, description: string) => void,
  addCommentsValue?: (id: number) => void,
  deleteCommentsValue?: (id: number) => void,
}>({cards: [
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
});

export const CardsContextProvider: React.FC = ({children}) => {

  const [cards, setCard] = useState(JSON.parse(Local.getCards()))

  const addCard = (cardListId: number, cardTitle: string, cardDescription: string) => {
    setCard(
      [...cards, {
        cardId: cards[cards.length - 1].cardId+1,
        columnId: cardListId,
        cardTitle: cardTitle,
        cardDescription: cardDescription,
        cardAuthor:Local.getUserName(),
        cardCommentsValue: 0
      }]
    )
    Local.setCards(JSON.stringify([...cards, {
      cardId: cards[cards.length - 1].cardId+1,
      columnId: cardListId,
      cardTitle: cardTitle,
      cardDescription: cardDescription,
      cardAuthor:Local.getUserName(),
      cardCommentsValue: 0
    }]))
  }
  const deleteCard = (cardId: number) => {
    setCard([...cards.filter((item:{
      cardId: number;
      columnId: number;
      cardTitle: string;
      cardDescription: string;
      cardAuthor: string;
      cardCommentsValue: number;
    }) => item.cardId !== cardId)])
    Local.setCards(JSON.stringify([...cards.filter((item:{
      cardId: number;
      columnId: number;
      cardTitle: string;
      cardDescription: string;
      cardAuthor: string;
      cardCommentsValue: number;
    }) => item.cardId !== cardId)]))
  }

  const editTitle = (id: number, title: string) => {
    setCard(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardTitle=title;
      }
      return card
    }));
    Local.setCards(JSON.stringify(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardTitle=title;
      }
      return card
    })));
  }

  const editDescription = (id: number, description: string) => {
    setCard(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardDescription=description;
      }
      return card
    }));
    Local.setCards(JSON.stringify(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardDescription=description;
      }
      return card
    })));
  }

  const addCommentsValue = (id: number) => {
    setCard(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardCommentsValue++;
      }
      return card
    }));
    Local.setCards(JSON.stringify(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardCommentsValue++;
      }
      return card
    })));
  }

  const deleteCommentsValue = (id: number) => {
    setCard(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardCommentsValue--;
      }
      return card
    }));
    Local.setCards(JSON.stringify(cards.map((card:{
      cardId: number,
      columnId: number,
      cardTitle: string,
      cardDescription: string,
      cardAuthor:string,
      cardCommentsValue: number,
    }) =>
    {
      if (card.cardId===id) {
        card.cardCommentsValue--;
      }
      return card
    })));
  }

  return(
    <CardsContext.Provider value={{
      cards,
      addCard,
      deleteCard,
      editTitle,
      editDescription,
      addCommentsValue,
      deleteCommentsValue,
    }}>
      {children}
    </CardsContext.Provider>
  )
}
