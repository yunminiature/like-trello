import React from 'react';
import Card from './Card';

function CardsList(props:any) {
  const cards = [
    { id: '0', column: '1', title: 'Накопить на слона', description: '', comments: '0'},
    { id: '1', column: '3', title: 'Выбрать слона', description: '', comments: '3'},
    { id: '2', column: '0', title: 'Купить слона', description: '', comments: '1'},
  ];
  const cardElement = cards.map(card =>
    (props.number==card.column) && <li key={card.id}><Card card={card}/></li>
  )
  return(
    <ul>
      {cardElement}
    </ul>
  )
}

export default CardsList;
