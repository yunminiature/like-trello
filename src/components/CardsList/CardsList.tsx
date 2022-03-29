import React, {FC, useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Local} from '../../services/LocalStorage'
import {CardsContext} from '../../contexts/CardsContext'

import Card from '../Card';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CardListProps{
  cardListId: number;
}

interface InputsNewCard{
  newCardTitle: string;
  newCardDescription: string;
}

const CardList:FC<CardListProps> = ({cardListId}) => {

  const {
    cards,
    addCard
  } = useContext(CardsContext);

  const {handleSubmit, control, reset} = useForm<InputsNewCard>({defaultValues: {newCardTitle: "" , newCardDescription: ""}})
  const onSubmit: SubmitHandler<InputsNewCard> = data =>{
    addCard?.(cardListId, data.newCardTitle, data.newCardDescription);
    reset()
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

        <Controller
          control={control}
          name="newCardTitle"
          rules={{
            required:"Обязательное поле"
          }}
          render={({field:{onChange, value}}) => (
            <DefaultInput
              label="Название: "
              type="text"
              value={value}
              defaultValue=""
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="newCardDescription"
          render={({field:{onChange, value}}) => (
            <DefaultInput
              label="Описание: "
              type="text"
              value={value}
              defaultValue=""
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
              }}
            />
          )}
        />
        <DefaultButton type="submit" value="Сохранить карточку"/>
      </form>
    </NewCard>

  return(
    <Cards>
      {cardsList}
      {newCard}
      <DefaultButton type="button" onClick={toggleIsAdd} value={isAdd ? "Отменить" : "Создать карточку"}/>
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
