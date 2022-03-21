import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Card: React.FC<{
  cardId: number;
  cardTitle: string;
  cardDescription: string;
  cardAuthor: string;
  currentUser: string;
}> = (props) => {

  const [isDelete, setIsDelete] = useState(false)
  const deleteBtn = () => {
    setIsDelete(true);
    setIsOpen(false);
  }

  const [cardTitle, setCardTitle] = useState(props.cardTitle)
  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  }

  const [isEditTitle, setIsEditTitle] = useState(false)
  const editTitleBtn = () => {
    setIsEditTitle(!isEditTitle);
  }

  const title = (isEditTitle)
    ?<input type="text" value={cardTitle} onChange={editTitle}></input>
    :<h2>{cardTitle}</h2>;

  const [cardDescription, setCardDescription] = useState(props.cardDescription)
  const editDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDescription(e.target.value);
  }

  const [isEditDescription, setIsEditDescription] = useState(false)
  const editDescriptionBtn = () => {
    setIsEditDescription(!isEditDescription);
  }

  const description = (isEditDescription)
    ?<input type="text" value={cardDescription} onChange={editDescription}></input>
    :<h2>{cardDescription}</h2>;

  const [isOpen, setIsOpen] = useState(false)
  const openBtn = () => {
    setIsOpen(!isOpen);
  }

  const card = (!isDelete) &&
    <CardStyle key={props.cardId} onClick={openBtn}>
      <h3 className="column-cards-card-title">{title}</h3>
      <p className="column-cards-card-description">{description}</p>
      <p className="column-cards-card-comments">Комментарии: </p>
    </CardStyle>

  const opencard = (isOpen) &&
  <OpenCard>
    <button onClick={openBtn}>Закрыть</button>
    {cardTitle}
    <button onClick={editTitleBtn}>{isEditTitle ? "Сохранить" : "Изменить"}</button>
    {cardDescription}
    <button onClick={editDescriptionBtn}>{isEditDescription ? "Сохранить" : "Изменить"}</button>
    <p>{props.cardAuthor}</p>
    <button onClick={deleteBtn}>Удалить</button>
  </OpenCard>

  return(
    <>
      {card}
      {opencard}
    </>
  )
}

const CardStyle = styled.li`
  padding: 20px;
  border-left: 5px solid #ff59b0;
  border-radius: 10px;
  background-color: #fff;
  color: #555;

  h3{
    margin: 0 0 10px;
  }

  p{
    margin: 0 0 10px;
  }
`

const OpenCard = styled.div`

`

export default Card;
