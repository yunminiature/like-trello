import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import CommentsList from '../CommentsList';
import DefaultModal from '../ui/DefaultModal';
import DefaultSection from '../ui/DefaultSection';
import DefaultInput from '../ui/DefaultInput';
import DefaultButton from '../ui/DefaultButton';

interface CardProps{
  cardId: number;
  cardTitle: string;
  cardDescription: string;
  cardAuthor: string;
  cardCommentsValue: number;
  addCommentsValue: (id: number) => void;
  deleteCommentsValue: (id: number) => void;
  editTitle: (id: number, title: string) => void;
  editDescription: (id: number, description: string) => void;
  deleteCard: (cardId: number) => void;
}

const Card: React.FC<CardProps> = (props) => {

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

  const deleteCard = () =>{
    props.deleteCard(props.cardId)
  }

  const [cardTitle, setCardTitle] = useState(props.cardTitle)
  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  }
  const [isEditTitle, setIsEditTitle] = useState(false)
  const toggleIsEditTitle = () => {
    (isEditTitle) && props.editTitle(props.cardId, cardTitle)
    setIsEditTitle(!isEditTitle);
  }

  const [cardDescription, setCardDescription] = useState(props.cardDescription)
  const editDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDescription(e.target.value);
  }
  const [isEditDescription, setIsEditDescription] = useState(false)
  const toggleIsEditDescription = () => {
    (isEditDescription) && props.editDescription(props.cardId, cardDescription)
    setIsEditDescription(!isEditDescription);
  }

  useEffect(() => {
    (localStorage.getItem("comments")===null || localStorage.getItem("comments")==="[]")
      && localStorage.setItem("comments", JSON.stringify([{
            cardId: 0,
            cardCommentId: 0,
            cardCommentAuthor: 'noname',
            cardCommentText: 'Сколько стоит слон?',
          },
          {
            cardId: 0,
            cardCommentId: 1,
            cardCommentAuthor: 'noname',
            cardCommentText: 'Много.',
          },
          {
            cardId: 1,
            cardCommentId: 2,
            cardCommentAuthor: 'noname',
            cardCommentText: 'Выбрал индийского',
          }]))
  },[]);

  const [comments, setComments] = useState(JSON.parse(localStorage.getItem("comments") || "[]"))

  const addComments = (commentText: string) => {
    setComments(
      [...comments, {
        cardId: props.cardId,
        cardCommentId: comments[comments.length - 1].cardCommentId+1,
        cardCommentAuthor: localStorage.getItem("userName"),
        cardCommentText: commentText
      }]
    );
    props.addCommentsValue(props.cardId);
    localStorage.setItem("comments", JSON.stringify([...comments, {
      cardId: props.cardId,
      cardCommentId: comments[comments.length - 1].cardCommentId+1,
      cardCommentAuthor: localStorage.getItem("userName"),
      cardCommentText: commentText
    }]))
  }
  const deleteComments = (commentId: number) => {
    setComments([...comments.slice(0, commentId), ...comments.slice(commentId + 1)]);
    props.deleteCommentsValue(props.cardId)
    localStorage.setItem("comments",JSON.stringify([...comments.slice(0, commentId), ...comments.slice(commentId + 1)]))
  }

  const title = (isEditTitle)
    ?<DefaultSection>
      <h3>Название: </h3>
      <DefaultInput inputType="text" inputValue={cardTitle} inputOnChange={editTitle}/>
      <DefaultButton buttonOnClick={toggleIsEditTitle} buttonValue={isEditTitle ? "Сохранить" : "Изменить"}/>
     </DefaultSection>
    :<DefaultSection>
      <h3>Название: </h3>
      <p>{cardTitle}</p>
      <DefaultButton buttonOnClick={toggleIsEditTitle} buttonValue={isEditTitle ? "Сохранить" : "Изменить"}/>
     </DefaultSection>;

  const description = (isEditDescription)
    ?<DefaultSection>
      <h3>Описание: </h3>
      <DefaultInput inputType="text" inputValue={cardDescription} inputOnChange={editDescription}/>
      <DefaultButton buttonOnClick={toggleIsEditDescription} buttonValue={isEditDescription ? "Сохранить" : "Изменить"}/>
     </DefaultSection>
    :<DefaultSection>
      <h3>Описание: </h3>
      <p>{cardDescription}</p>
      <DefaultButton buttonOnClick={toggleIsEditDescription} buttonValue={isEditDescription ? "Сохранить" : "Изменить"}/>
     </DefaultSection>;

  const card =
    <CardStyle onClick={toggleIsOpen}>
      <CardTitle>{cardTitle}</CardTitle>
      <CardDescription>{cardDescription}</CardDescription>
      <CardComments>Комментарии: {props.cardCommentsValue}</CardComments>
    </CardStyle>

  const openСard = (isOpen) &&
  <DefaultModal>
    <OpenCard>
      <DefaultButton buttonOnClick={toggleIsClose} buttonValue="Закрыть"/>
      {title}
      {description}
      <DefaultSection>
        <h3>Автор: </h3>
        <p>{props.cardAuthor}</p>
      </DefaultSection>
      <CommentsList
        cardId={props.cardId}
        cardComments={comments}
        addCardComments={addComments}
        deleteCardComments={deleteComments}
      />
      <DefaultButton buttonOnClick={deleteCard} buttonValue="Удалить"/>
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
