import React, {FC, useState, useContext} from 'react';
import styled from 'styled-components';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { addComment, deleteComment } from '../../slices/commentsSlice';

import Comment from '../Comment';
import DefaultInput from '../../ui/DefaultInput';
import DefaultButton from '../../ui/DefaultButton';

interface CommentListProps{
  cardId: number;
  comments:{
    cardId: number,
    id: number,
    cardCommentAuthor: string,
    cardCommentText: string,
  }[]
}

interface InputsComment{
  text: string;
}

const CommentsList:FC<CommentListProps> = ({cardId}) => {


  const {handleSubmit, control, reset} = useForm<InputsComment>({defaultValues:{text:""}})
  const onSubmit: SubmitHandler<InputsComment> = data =>{
    dispatch(addComment(cardId, data.text))
    reset()
  }

  const commentsList = comments.map(comment =>
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

  form{
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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

const mapStateToProps = state => ({
  comments: state.comments
})

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(addComment(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
