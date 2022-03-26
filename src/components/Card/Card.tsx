import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
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

const Card: React.FC<CardProps> = ({cardId, cardTitle, cardDescription, cardAuthor, cardCommentsValue}) => {

  const {
    deleteCard,
    editTitle,
    editDescription,
    addCommentsValue,
    deleteCommentsValue,
  } = useContext(CardsContext);

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
    deleteCard(cardId)
  }

  const [editCardTitle, setEditCardTitle] = useState(cardTitle)
  const toggleEditCardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCardTitle(e.target.value);
  }
  const [isEditTitle, setIsEditTitle] = useState(false)
  const toggleIsEditTitle = () => {
    (isEditTitle) && editTitle(cardId, editCardTitle)
    setIsEditTitle(!isEditTitle);
  }

  const [editCardDescription, setEditCardDescription] = useState(cardDescription)
  const toggleEditCardDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCardDescription(e.target.value);
  }
  const [isEditDescription, setIsEditDescription] = useState(false)
  const toggleIsEditDescription = () => {
    (isEditDescription) && editDescription(cardId, editCardDescription)
    setIsEditDescription(!isEditDescription);
  }

  const title = (isEditTitle)
    ?<DefaultSection>
      <h3>Название: </h3>
      <DefaultInput inputType="text" inputValue={editCardTitle} inputOnChange={toggleEditCardTitle}/>
      <DefaultButton buttonOnClick={toggleIsEditTitle} buttonValue={isEditTitle ? "Сохранить" : "Изменить"}/>
     </DefaultSection>
    :<DefaultSection>
      <h3>Название: </h3>
      <p>{editCardTitle}</p>
      <DefaultButton buttonOnClick={toggleIsEditTitle} buttonValue={isEditTitle ? "Сохранить" : "Изменить"}/>
     </DefaultSection>;

  const description = (isEditDescription)
    ?<DefaultSection>
      <h3>Описание: </h3>
      <DefaultInput inputType="text" inputValue={editCardDescription} inputOnChange={toggleEditCardDescription}/>
      <DefaultButton buttonOnClick={toggleIsEditDescription} buttonValue={isEditDescription ? "Сохранить" : "Изменить"}/>
     </DefaultSection>
    :<DefaultSection>
      <h3>Описание: </h3>
      <p>{editCardDescription}</p>
      <DefaultButton buttonOnClick={toggleIsEditDescription} buttonValue={isEditDescription ? "Сохранить" : "Изменить"}/>
     </DefaultSection>;

  const card =
    <CardStyle onClick={toggleIsOpen}>
      <CardTitle>{editCardTitle}</CardTitle>
      <CardDescription>{editCardDescription}</CardDescription>
      <CardComments>Комментарии: {cardCommentsValue}</CardComments>
    </CardStyle>

  const openСard = (isOpen) &&
  <DefaultModal>
    <OpenCard>
      <DefaultButton buttonOnClick={toggleIsClose} buttonValue="Закрыть"/>
      {title}
      {description}
      <DefaultSection>
        <h3>Автор: </h3>
        <p>{cardAuthor}</p>
      </DefaultSection>
      <CommentsList
        cardId={cardId}
      />
      <DefaultButton buttonOnClick={toggleDeleteCard} buttonValue="Удалить"/>
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
