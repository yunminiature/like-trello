import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Card from '../Card';
import DefaultInput from '../ui/DefaultInput';
import DefaultButton from '../ui/DefaultButton';

interface CardListProps{
  cardListId: number;
}

const CardList: React.FC<CardListProps> = (props) => {

  useEffect(() => {
    (localStorage.getItem("cards")===null || localStorage.getItem("cards")==="[]")
      && localStorage.setItem("cards", JSON.stringify([
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
        ]))
  })

  const [cards, setCard] = useState(JSON.parse(localStorage.getItem("cards") || "[]"))

  const addCard = () => {
    setCard(
      [...cards, {
        cardId: cards[cards.length - 1].cardId+1,
        columnId: props.cardListId,
        cardTitle: cardTitle,
        cardDescription: cardDescription,
        cardAuthor:localStorage.getItem("userName"),
        cardCommentsValue: 0
      }]
    )
    setCardTitle("");
    setCardDescription("");
  }
  const deleteCard = (cardId: number) => {
    setCard([...cards.slice(0, cardId), ...cards.slice(cardId + 1)])
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  const editTitle = (id: number, title: string) => {
    cards[id].cardTitle=title;
    setCard(cards);
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  const editDescription = (id: number, description: string) => {
    cards[id].cardDescription=description;
    setCard(cards);
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  const addCommentsValue = (id: number) => {
    cards[id].cardCommentsValue++;
    setCard(cards);
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  const deleteCommentsValue = (id: number) => {
    cards[id].cardCommentsValue--;
    setCard(cards);
    localStorage.setItem("cards", JSON.stringify(cards));
  }

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
    cardCommentsValue:number;
  }) =>
    (props.cardListId===card.columnId) &&
      <Card
        key={card.cardId}
        {...card}
        addCommentsValue={addCommentsValue}
        deleteCommentsValue={deleteCommentsValue}
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
