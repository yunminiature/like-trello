import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Card from '../Card';
import DefaultInput from '../DefaultInput';
import DefaultButton from '../DefaultButton';

interface CardListProps{
  cardListId: number;
}

const CardList: React.FC<CardListProps> = (props) => {

  const [cards, setCard] = useState((localStorage.getItem("cards")===null)
  ? [
      { cardId: 0,
        columnId: 1,
        cardTitle: 'Накопить на слона',
        cardDescription: '',
        cardAuthor:'noname'
      },
      { cardId: 1,
        columnId: 3,
        cardTitle: 'Выбрать слона',
        cardDescription: '',
        cardAuthor:'noname'
      },
      { cardId: 2,
        columnId: 0,
        cardTitle: 'Купить слона',
        cardDescription: '',
        cardAuthor:'noname'
      },
    ]
  : JSON.parse(localStorage.getItem("cards") || "[]")
  );

  const addCard = () => {
    setCard(
      [...cards, {
        cardId: cards[cards.length - 1].cardId+1,
        columnId: props.cardListId,
        cardTitle: cardTitle,
        cardDescription: cardDescription,
        cardAuthor:localStorage.getItem("userName")
      }]
    )
  }
  const deleteCard = (cardId: number) => {
    setCard([...cards.slice(0, cardId), ...cards.slice(cardId + 1)])
  }

  const editTitle = (id: number, title: string) => {
    cards[id].cardTitle=title;
    setCard(cards);
  }

  const editDescription = (id: number, description: string) => {
    cards[id].cardDescription=description;
    setCard(cards);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
 });

  const [isAdd, setIsAdd] = useState(false)
  const toggleIsAdd = () => {
    setIsAdd(!isAdd);
  }

  const [cardTitle, setCardTitle] = useState("")
  const addCardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  }

  const [cardDescription, setCardDescription] = useState("")
  const addCardDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDescription(e.target.value);
  }

  const cardsList = cards.map((card:{
    cardId: number;
    columnId: number;
    cardTitle: string;
    cardDescription: string;
    cardAuthor:string;
  }) =>
    (props.cardListId===card.columnId) &&
      <Card
        key={card.cardId}
        {...card}
        editTitle={editTitle}
        editDescription={editDescription}
        deleteCard={deleteCard}
      />
  )

  const newCard = (isAdd) &&
    <NewCard>
      <form>
        <label>
          Название:
          <DefaultInput inputType="text" inputValue={cardTitle} inputOnChange={addCardTitle}/>
        </label>
        <label>
          Описание:
          <DefaultInput inputType="text" inputValue={cardDescription} inputOnChange={addCardDescription}/>
        </label>
      </form>
      <DefaultButton buttonOnClick={addCard} buttonValue="Сохранить карточку"/>
    </NewCard>

  return(
    <Cards>
      {cardsList}
      {newCard}
      <DefaultButton buttonOnClick={toggleIsAdd} buttonValue={isAdd ? "Отменить" : "Создать карточку"}/>
    </Cards>
  )
}

const Cards = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  color: #555;
  font-size: 18px;
  line-height: 18px;
  font-family: consolas;
`

export default CardList;
