import React, {FC, useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Local} from '../../services/LocalStorage'
import {useSelector, useDispatch} from 'react-redux'
import type {RootState, AppDispatch} from '../../store/index'
import {cardsSelector} from '../../store/Cards/selectors'
import {addCard, deleteCard, editTitle, editDescription} from '../../store/Cards/actions'

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

  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector<RootState>(cardsSelector);

  const {handleSubmit, control, reset} = useForm<InputsNewCard>({defaultValues: {newCardTitle: "" , newCardDescription: ""}})
  const onSubmit: SubmitHandler<InputsNewCard> = data =>{
    dispatch(addCard({
      id: 0,
      columnId:cardListId,
      title: data.newCardTitle,
      description: data.newCardDescription
    }))
    reset()
  }

  const [isAdd, setIsAdd] = useState(false)
  const toggleIsAdd = () => {
    setIsAdd(!isAdd);
  }

  const cardsList = cards.map((card:{
    id: number;
    columnId?: number;
    title?: string;
    description?: string;
    author?:string;
    commentsCount?:number;
  }) =>
    (cardListId===card.columnId) &&
      <Card
        key={card.id}
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
