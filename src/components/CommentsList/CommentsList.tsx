import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, SubmitHandler} from 'react-hook-form';
import {CommentsContext} from '../../contexts/CommentsContext'

import Comment from '../Comment';
import DefaultButton from '../../ui/DefaultButton';

interface CommentListProps{
  cardId: number;
}

interface InputsComment{
  commentText: string;
}

const CommentsList: React.FC<CommentListProps> = ({cardId}) => {

  const {
    comments,
    addComments
  } = useContext(CommentsContext);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsComment>()
  const onSubmit: SubmitHandler<InputsComment> = data =>{
    addComments?.(cardId, data.commentText);
  }

  const commentsList = comments.map(comment =>
    (cardId===comment.cardId) &&
      <Comment
        key={comment.cardCommentId}
        {...comment}
      />
  )

  return(
    <Comments>
      {commentsList}
      <AddingComment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("commentText")} type="text"/>
          <button type="submit">Добавить</button>
        </form>
      </AddingComment>
    </Comments>
  )
}

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0 0;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`

const AddingComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CommentInput = styled.input`
  width: 80%;
  min-width: 100px;
  margin: 20px 0 0;
  padding: 5px 0;
  border: 3px solid #6e60ff;
  border-radius: 10px;
  font-family: consolas;
  font-size: 20px;
  line-height: 20px;
`

export default CommentsList;
