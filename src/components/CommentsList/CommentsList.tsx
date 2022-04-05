import React, {FC} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useAppSelector, useAppDispatch} from '../../store/index'
import {selectUserName} from '../../store/UserName/selectors'
import {selectComments} from '../../store/Comments/selectors'
import {addCommentsCount} from '../../store/Cards/actions'
import {addComment} from '../../store/Comments/actions'

import Comment from '../Comment';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CommentListProps{
  cardId: number
}

interface InputsComment{
  text: string;
}

const CommentsList:FC<CommentListProps> = ({cardId}) => {

  const userName = useAppSelector(selectUserName)
  const comments = useAppSelector(selectComments)
  const dispatch = useAppDispatch()

  const {handleSubmit, control, reset} = useForm<InputsComment>({defaultValues:{text:""}})
  const onSubmit: SubmitHandler<InputsComment> = data =>{
    dispatch(addComment({
      id: 0,
      cardId: cardId,
      author: userName,
      text: data.text
    }))
    dispatch(addCommentsCount(cardId))
    reset()
  }

  const commentsList = comments.map((comment:{
    cardId: number,
    id: number,
    author?: string,
    text?: string
  }) =>
    (cardId===comment.cardId) &&
      <Comment
        key={comment.id}
        {...comment}
      />
  )

  return(
    <Comments>
      {commentsList}
      <AddingComment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="text"
            render={({field:{onChange, value}}) => (
              <DefaultInput
                type="text"
                value={value}
                defaultValue=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(e.target.value);
                }}
              />
            )}
          />
          <DefaultButton type="submit" value="Добавить" onClick={reset}/>
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

  form{
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  input{
    border: 3px solid #6e60ff;
    border-radius: 10px;
  }
`

export default CommentsList
