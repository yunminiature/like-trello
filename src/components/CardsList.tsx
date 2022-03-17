import React from 'react';
import Card from './Card';

interface CardsListProps {
  number?: string;
  username?: string;
}

interface CardsListState {
  isAdd?: boolean;
  cardId?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardAuthor?: string;
  cardComments?: number;
  isSub?: boolean;
}

class CardsList extends React.Component<CardsListProps, CardsListState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      isAdd: false,
      cardId: "4",
      cardTitle: "",
      cardDescription: "",
      cardComments: 0,
      isSub: false
    }
  }

  cardAddBtn = () => {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  titleAdd = (e?: any) => {
    this.setState({cardTitle: e.target.value})
  }

  descriptionAdd = (e?: any) => {
    this.setState({cardDescription: e.target.value})
  }

  cardAddSub = () => {
    this.setState({
      isSub: !this.state.isSub
    })
  }

  render(){
    const cards = [
    { id: '0', column: '1', title: 'Накопить на слона', description: '', author:'noname', comments: 0},
    { id: '1', column: '3', title: 'Выбрать слона', description: '', author:'noname', comments: 3},
    { id: '2', column: '0', title: 'Купить слона', description: '', author:'noname', comments: 1},
  ];;

    const cardElement = cards.map(card =>
      (this.props.number==card.column) &&
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
          author={card.author}
          comments={card.comments}
        />

    )

    const isAdd = this.state.isAdd;
    const cardAdd = (isAdd) &&
      <div className="card-add">
        <label className="card-add-title">
          Название:
          <input type="text" className="card-add-title-input" value={this.state.cardTitle} onChange={this.titleAdd}></input>
        </label>
        <label className="card-add-description">
          Описание:
          <input type="text" className="card-add-description-input" value={this.state.cardDescription} onChange={this.descriptionAdd}></input>
        </label>
        <button className="card-add-sub" onClick={this.cardAddSub}>Добавить</button>
      </div>;

    const isSub = this.state.isSub;
    const newCard = (isSub) &&
      <Card
        id={this.state.cardId}
        title={this.state.cardTitle}
        description={this.state.cardDescription}
        author={this.props.username}
        comments={this.state.cardComments}
      />;

    return(
      <>
        <ul className="column-cards">
          {cardElement}
          {newCard}
          {cardAdd}
        </ul>
        <button className="column-cards-btn" onClick={this.cardAddBtn}>{isAdd ? "Отменить" : "Создать карточку"}</button>
      </>

    )
  }
}


export default CardsList;
