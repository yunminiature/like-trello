import React, {createContext, useContext, useState} from 'react';

import {CardsContext} from './CardsContext'
import {Local} from '../services/LocalStorage'

export const CommentsContext = createContext<{
  comments: {
    cardId: number,
    id: number,
    cardCommentAuthor: string,
    cardCommentText: string,
  }[],
  addComments?: (cardListId: number, commentText: string) => void,
  deleteComments?: (cardId:number, commentId: number) => void
}>({comments: [{
      cardId: 0,
      id: 0,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Сколько стоит слон?',
    },
    {
      cardId: 0,
      id: 1,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Много.',
    },
    {
      cardId: 1,
      id: 2,
      cardCommentAuthor: 'noname',
      cardCommentText: 'Выбрал индийского',
    }]
});

export const CommentsContextProvider: React.FC = ({children}) => {

  const {
    addCommentsValue,
    deleteCommentsValue
  } = useContext(CardsContext);

  const [comments, setComments] = useState(JSON.parse(Local.getComments()))

  const addComments = (cardId:number, commentText: string) => {
    setComments(
      [...comments, {
        cardId: cardId,
        id: comments[comments.length - 1].id+1,
        cardCommentAuthor: Local.getUserName(),
        cardCommentText: commentText
      }]
    );
    addCommentsValue?.(cardId);
    Local.setComments(JSON.stringify([...comments, {
      cardId: cardId,
      id: comments[comments.length - 1].id+1,
      cardCommentAuthor: Local.getUserName(),
      cardCommentText: commentText
    }]))
  }
  const deleteComments = (cardId:number, commentId: number) => {
    setComments([...comments.filter((item:{
      cardId: number,
      id: number,
      cardCommentAuthor: string,
      cardCommentText: string,
    }) => item.id !== commentId)])
    deleteCommentsValue?.(cardId);
    Local.setComments(JSON.stringify([...comments.filter((item:{
      cardId: number,
      id: number,
      cardCommentAuthor: string,
      cardCommentText: string,
    }) => item.id !== commentId)]))
  }

  return(
    <CommentsContext.Provider value={{
      comments,
      addComments,
      deleteComments
    }}>
      {children}
    </CommentsContext.Provider>
  )
}
