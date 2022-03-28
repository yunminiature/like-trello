import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Local} from '../../services/LocalStorage'
import {CardsContext} from '../../contexts/CardsContext'

import Card from '../Card';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CardListProps{
  cardListId: number;
}

interface InputsCard{
  cardTitle: string;
  cardDescription: string;
}

const CardList: React.FC<CardListProps> = ({cardListId}) => {

  const {
    cards,
    addCard
  } = useContext(CardsContext);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsCard>()
  const onSubmit: SubmitHandler<InputsCard> = data =>{
    addCard?.(cardListId, data.cardTitle, data.cardDescription);
  }

  const [isAdd, setIsAdd] = useState(false)
  const toggleIsAdd = () => {
    setIsAdd(!isAdd);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Название:
          <DefaultInput {...register("cardTitle")} inputType="text"/>
        </label>
        <label>
          Описание:
          <DefaultInput {...register("cardDescription")} inputType="text"/>
        </label>
        <DefaultButton buttonType="submit" buttonValue="Сохранить карточку"/>
      </form>
    </NewCard>

  return(
    <Cards>
      {cardsList}
      {newCard}
      <DefaultButton buttonType="button" buttonOnClick={toggleIsAdd} buttonValue={isAdd ? "Отменить" : "Создать карточку"}/>
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
