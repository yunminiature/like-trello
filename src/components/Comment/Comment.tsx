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
      <CommentButton onClick={deleteCardComments}>Удалить</CommentButton>
    </CommentStyle>
  )
}

const CommentStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px;
`

const CommentAuthor = styled.h3`
  margin: 0 20px 0 0;
  color: #6e60ff;
`

const CommentText = styled.p`
  margin:0;
`
const CommentButton = styled.button`
  margin: 0 0 0 auto;
  min-width: 110px;
  padding: 12px 20px;
  border: 0px;
  border-radius: 10px;
  font-family: consolas;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  color: #fff;
  background-color: #6e60ff;
`

export default Comment;
