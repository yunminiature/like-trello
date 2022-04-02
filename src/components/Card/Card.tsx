import React, {FC, useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useSelector, useDispatch} from 'react-redux'
import type {AppDispatch} from '../../store/index'
import {deleteCard, editTitle, editDescription} from '../../store/Cards/actions'


import CommentsList from '../CommentsList';
import DefaultModal from '../../ui/DefaultModal';
import DefaultSection from '../../ui/DefaultSection';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CardProps{
  id: number;
  title?: string;
  description?: string;
  author?: string;
  commentsCount?: number;
}

interface InputCard{
  title: string;
  description: string;
}

const Card:FC<CardProps> = ({id, title, description, author, commentsCount}) => {

  const dispatch = useDispatch<AppDispatch>();

  const {
    control: controlTitle,
    handleSubmit: handleSubmitTitle,
  } = useForm<InputCard>()
  const onSubmitTitle: SubmitHandler<InputCard> = data =>{
    dispatch(editTitle({
      id: id,
      title: data.title
    }));
    setIsEditTitle(!isEditTitle);
  }

  const {
    control: controlDescription,
    handleSubmit: handleSubmitDescription,
  } = useForm<InputCard>()
  const onSubmitDescription: SubmitHandler<InputCard> = data =>{
    dispatch(editDescription({
      id: id,
      description: data.description
    }));
    setIsEditDescription(!isEditDescription);
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(true);
  }
  const toggleIsClose = () => {
    setIsOpen(false);
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      toggleIsClose()
    }
  });

  const toggleDeleteCard = () =>{
      dispatch(deleteCard(id))
  }

  const [isEditTitle, setIsEditTitle] = useState(false)
  const toggleIsEditTitle = () => {
    setIsEditTitle(!isEditTitle);
  }

  const [isEditDescription, setIsEditDescription] = useState(false)
  const toggleIsEditDescription = () => {
    setIsEditDescription(!isEditDescription);
  }

  const titleForm = (isEditTitle)
    ?<DefaultSection>
      <form onSubmit={handleSubmitTitle(onSubmitTitle)}>
        <Controller
          control={controlTitle}
          name="title"
          rules={{
            required:"Обязательное поле"
          }}
          render={({field:{onChange, value}}) => (
            <DefaultInput
              label="Название: "
              type="text"
              value={value}
              defaultValue={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
              }}
            />
          )}
        />
        <DefaultButton type="submit" value="Сохранить"/>
      </form>
     </DefaultSection>
    :<DefaultSection>
      <h3>Название: </h3>
      <p>{title}</p>
      <DefaultButton type="button" onClick={toggleIsEditTitle} value="Изменить"/>
     </DefaultSection>;

  const descriptionForm = (isEditDescription)
    ?<DefaultSection>
      <form onSubmit={handleSubmitDescription(onSubmitDescription)}>
        <Controller
          control={controlDescription}
          name="description"
          render={({field:{onChange, value}}) => (
            <DefaultInput
              label="Описание: "
              type="text"
              value={value}
              defaultValue={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
              }}
            />
          )}
        />
        <DefaultButton type="submit" value="Сохранить"/>
      </form>
     </DefaultSection>
    :<DefaultSection>
      <h3>Описание: </h3>
      <p>{description}</p>
      <DefaultButton type="button" onClick={toggleIsEditDescription} value="Изменить"/>
     </DefaultSection>;

  const card =
    <CardStyle onClick={toggleIsOpen}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardComments>Комментарии: {commentsCount}</CardComments>
    </CardStyle>

  const openСard = (isOpen) &&
  <DefaultModal>
    <OpenCard>
      <DefaultButton type="button" onClick={toggleIsClose} value="Закрыть"/>
      {titleForm}
      {descriptionForm}
      <DefaultSection>
        <h3>Автор: </h3>
        <p>{author}</p>
      </DefaultSection>
      <CommentsList
        cardId={id}
      />
      <DefaultButton type="button" onClick={toggleDeleteCard} value="Удалить"/>
    </OpenCard>
  </DefaultModal>

  return(
    <>
      {card}
      {openСard}
    </>
  )
}

const CardStyle = styled.li`
  padding: 20px;
  border-left: 5px solid #ff59b0;
  border-radius: 10px;
  background-color: #fff;
  color: #555;
`
const CardTitle = styled.h3`
  margin: 0 0 10px;
`
const CardDescription = styled.p`
  margin: 0 0 10px;
`
const CardComments = styled.p`
  margin: 0 0 10px;
`

const OpenCard = styled.div`
  width: 50%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  border-left: 5px solid #6e60ff;
  border-radius: 10px;
  background-color: #f6f9fb;
  color: #555;
  font-family: consolas;
`

export default Card;
