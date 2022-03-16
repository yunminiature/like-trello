import React from 'react';

function Card(props:any) {
  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Комментарии:{props.comments}</p>
    </div>
  )
}

export default Card;
