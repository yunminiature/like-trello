import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import DefaultButton from '../DefaultButton';

interface CommentProps{
  cardId: number,
  cardCommentId: number,
  cardCommentAuthor: string,
  cardCommentText: string
  deleteCardComments: (commentId: number) => void;
}

const Comment: React.FC<CommentProps> = (props) => {

  const deleteCardComments = () =>{
    props.deleteCardComments(props.cardCommentId)
  }

  return(
    <CommentStyle>
      <CommentAuthor>{props.cardCommentAuthor}:</CommentAuthor>
      <CommentText>{props.cardCommentText}</CommentText>
      <DefaultButton buttonOnClick={deleteCardComments} buttonValue="Удалить"/>
    </CommentStyle>
  )
}

const CommentStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px;

  button{
    margin: 0 0 0 auto;
  }
`

const CommentAuthor = styled.h3`
  margin: 0 20px 0 0;
  color: #6e60ff;
`

const CommentText = styled.p`
  margin:0;
`

export default Comment;
