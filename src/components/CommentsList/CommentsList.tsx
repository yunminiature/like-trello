import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Comment from '../Comment';
import DefaultButton from '../DefaultButton';

interface CommentListProps{
  cardId: number;
  cardComments: {cardId: number, cardCommentId: number, cardCommentAuthor: string, cardCommentText: string}[];
  addCardComments: (commentText: string) => void;
  deleteCardComments: (commentId: number) => void;
  currentUser: string;
}

const CommentsList: React.FC<CommentListProps> = (props) => {

  const [commentText, setCommentText] = useState("")
  const addCommentText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  }

  const [isAdd, setIsAdd] = useState("")
  const toggleIsAdd = () => {
    props.addCardComments(commentText);
  }

  const commentsList = props.cardComments.map(comment =>
    (props.cardId===comment.cardId) &&
      <Comment
        cardId={comment.cardId}
        cardCommentId={comment.cardCommentId}
        cardCommentAuthor={comment.cardCommentAuthor}
        cardCommentText={comment.cardCommentText}
        deleteCardComments={props.deleteCardComments}
      />
  )

  return(
    <Comments>
      {commentsList}
      <AddingComment>
        <CommentInput type="text" value={commentText} onChange={addCommentText}/>
        <DefaultButton buttonOnClick={toggleIsAdd} buttonValue="Добавить"/>
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
