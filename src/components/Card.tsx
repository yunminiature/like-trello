import React from 'react';

function Card(props:any) {
  return(
    <div>
      <h3>{props.card.title}</h3>
      <p>{props.card.description}</p>
      <p>Комментарии:{props.card.comments}</p>
    </div>
  )
}

export default Card;
