import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

const CardList: React.FC<{
  cardListId: number;
  username: string;
}> = (props) => {

  const [cards, addCard] = useState([
    { cardId: 0, columnId: 1, cardTitle: 'Накопить на слона', cardDescription: '', cardAuthor:'noname'},
    { cardId: 1, columnId: 3, cardTitle: 'Выбрать слона', cardDescription: '', cardAuthor:'noname'},
    { cardId: 2, columnId: 0, cardTitle: 'Купить слона', cardDescription: '', cardAuthor:'noname'},
  ]);

  const saveBtn = () => {
    addCard(
      [...cards, {
        cardId: cards[cards.length - 1].cardId+1,
        columnId: props.cardListId,
        cardTitle: cardTitle,
        cardDescription: cardDescription,
        cardAuthor:props.username
      }]
    )
  }

  const cardsList = cards.map(card =>
    (props.cardListId===card.columnId) &&
      <Card
        cardId={card.cardId}
        cardTitle={card.cardTitle}
        cardDescription={card.cardDescription}
        cardAuthor={card.cardAuthor}
        currentUser={props.username}
      />
  )

  const [isAdd, setIsAdd] = useState(false)
  const addBtn = () => {
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

  const addingCard = (isAdd) &&
    <AddingCard>
      <form>
        <label>
          Название:
          <input type="text" value={cardTitle} onChange={addCardTitle}></input>
        </label>
        <label>
          Описание:
          <input type="text" value={cardDescription} onChange={addCardDescription}></input>
        </label>
      </form>
      <button onClick={saveBtn}>Сохранить карточку</button>
    </AddingCard>

  return(
    <Cards>
      {cardsList}
      {addingCard}
      <AddBtn onClick={addBtn}>{isAdd ? "Отменить" : "Создать карточку"}</AddBtn>
    </Cards>

  )
}

const Cards = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const AddingCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  font-size: 18px;
  line-height: 18px;

  label{

    input{
      width: 100%;
      margin: 20px 0 0 0;
      padding: 10px;
      font-size: 18px;
      line-height: 18px;
    };
  };

  button{
    width: 100%;
    margin: 20px 0 0 0;
    border: 0px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 16px;
    background-color: #6e60ff;
    color: #fff;
  };
`

const AddBtn = styled.div`
  margin: 20px 0;
  padding: 12px 20px;
  border: 0px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 16px;
  background-color: #6e60ff;
  color: #fff;
`

export default CardList;
