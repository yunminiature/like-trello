import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Local} from '../../services/LocalStorage'
import {CardsContext} from '../../contexts/CardsContext'


import CommentsList from '../CommentsList';
import DefaultModal from '../../ui/DefaultModal';
import DefaultSection from '../../ui/DefaultSection';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CardProps{
  cardId: number;
  cardTitle: string;
  cardDescription: string;
  cardAuthor: string;
  cardCommentsValue: number;
}

interface InputsCard{
  cardTitle: string;
  cardDescription: string;
}

const Card: React.FC<CardProps> = ({cardId, cardTitle, cardDescription, cardAuthor, cardCommentsValue}) => {

  const {
    deleteCard,
    editTitle,
    editDescription,
    addCommentsValue,
    deleteCommentsValue,
  } = useContext(CardsContext);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsCard>()
  const onSubmit: SubmitHandler<InputsCard> = data =>{
    if (isEditTitle) {
      editTitle?.(cardId, data.cardTitle);
      setIsEditTitle(!isEditTitle)
    }
    if (isEditDescription) {
      editDescription?.(cardId, data.cardDescription);
      setIsEditDescription(!isEditDescription);
    }
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
    deleteCard?.(cardId)
  }

  const [isEditTitle, setIsEditTitle] = useState(false)
  const toggleIsEditTitle = () => {
    setIsEditTitle(!isEditTitle);
  }

  const [isEditDescription, setIsEditDescription] = useState(false)
  const toggleIsEditDescription = () => {
    setIsEditDescription(!isEditDescription);
  }

  const title = (isEditTitle)
    ?<DefaultSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h3>Название: </h3>
          <DefaultInput {...register("cardTitle")} inputType="text" inputDefaultValue={cardTitle}/>
        </label>
        <DefaultButton buttonType="submit" buttonValue="Сохранить"/>
      </form>
     </DefaultSection>
    :<DefaultSection>
      <h3>Название: </h3>
      <p>{cardTitle}</p>
      <DefaultButton buttonType="button" buttonOnClick={toggleIsEditTitle} buttonValue="Изменить"/>
     </DefaultSection>;

  const description = (isEditDescription)
    ?<DefaultSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h3>Описание: </h3>
          <DefaultInput {...register("cardDescription")} inputType="text" inputDefaultValue={cardDescription}/>
        </label>
        <DefaultButton buttonType="submit" buttonValue="Сохранить"/>
      </form>
     </DefaultSection>
    :<DefaultSection>
      <h3>Описание: </h3>
      <p>{cardDescription}</p>
      <DefaultButton buttonType="button" buttonOnClick={toggleIsEditDescription} buttonValue="Изменить"/>
     </DefaultSection>;

  const card =
    <CardStyle onClick={toggleIsOpen}>
      <CardTitle>{cardTitle}</CardTitle>
      <CardDescription>{cardDescription}</CardDescription>
      <CardComments>Комментарии: {cardCommentsValue}</CardComments>
    </CardStyle>

  const openСard = (isOpen) &&
  <DefaultModal>
    <OpenCard>
      <DefaultButton buttonType="button" buttonOnClick={toggleIsClose} buttonValue="Закрыть"/>
      {title}
      {description}
      <DefaultSection>
        <h3>Автор: </h3>
        <p>{cardAuthor}</p>
      </DefaultSection>
      <CommentsList
        cardId={cardId}
      />
      <DefaultButton buttonType="button" buttonOnClick={toggleDeleteCard} buttonValue="Удалить"/>
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
