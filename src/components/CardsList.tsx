import React from 'react';
import Card from './Card';

interface CardsListProps {
  number?: string;
}

interface CardsListState {
  isAdd?: boolean;
  cardId?: string;
  cardTitle?: string;
  cardDescription?: string;
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
    { id: '0', column: '1', title: 'Накопить на слона', description: '', comments: 0},
    { id: '1', column: '3', title: 'Выбрать слона', description: '', comments: 3},
    { id: '2', column: '0', title: 'Купить слона', description: '', comments: 1},
  ];;

    const cardElement = cards.map(card =>
      (this.props.number==card.column) &&
        <li key={card.id} className="column-cards-card">
          <Card title={card.title} description={card.description} comments={card.comments}/>
        </li>
    )

    const isAdd = this.state.isAdd;
    const cardAdd = (isAdd) &&
      <div className="card-add">
        <label className="card-add-title">
          Название:
          <input type="text" className="card-add-title-text" value={this.state.cardTitle} onChange={this.titleAdd}></input>
        </label>
        <label className="card-add-description">
          Описание:
          <input type="text" className="card-add-description-text" value={this.state.cardDescription} onChange={this.descriptionAdd}></input>
        </label>
        <button className="card-add-sub" onClick={this.cardAddSub}>Добавить</button>
      </div>;

    const isSub = this.state.isSub;
    const newCard = (isSub) &&
      <li key={this.state.cardId} className="column-cards-card">
        <Card title={this.state.cardTitle} description={this.state.cardDescription} comments={this.state.cardComments}/>
      </li>;

    return(
      <div className="column-cards">
        <ul>
          {cardElement}
          {newCard}
          {cardAdd}
        </ul>
        <button className="column-cards-btn" onClick={this.cardAddBtn}>{isAdd ? "Отменить" : "Создать карточку"}</button>
      </div>

    )
  }
}


export default CardsList;
