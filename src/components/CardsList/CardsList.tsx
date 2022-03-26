import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {Local} from '../../services/LocalStorage'
import {CardsContext} from '../../contexts/CardsContext'

import Card from '../Card';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CardListProps{
  cardListId: number;
}

const CardList: React.FC<CardListProps> = ({cardListId}) => {

  const {
    cards,
    addCard
  } = useContext(CardsContext);

  const addingCard = () =>{
    addCard(cardListId, cardTitle, cardDescription);
    setCardTitle("");
    setCardDescription("");
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
    (cardListId===card.columnId) &&
      <Card
        key={card.cardId}
        {...card}
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
      <DefaultButton buttonOnClick={addingCard} buttonValue="Сохранить карточку"/>
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
