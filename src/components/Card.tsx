import React from 'react';
import OpenCard from './OpenCard';

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  author?: string;
  comments?: number;
}

interface CardState {
  isAvailable?: boolean;
  isOpen?: boolean;
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      isAvailable: true,
      isOpen: false
    }
  }

  cardOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  cardClose = (e?: boolean) => {
    this.setState({
      isOpen: false
    });
  }

  cardDelete = (e?: boolean) => {
    this.setState({
      isAvailable: false,
      isOpen: false
    });
  }

  render(){
    const isAvailable = this.state.isAvailable;
    const card = (isAvailable) &&
      <li key={this.props.id} className="column-cards-card" onClick={this.cardOpen}>
        <h3 className="column-cards-card-title">{this.props.title}</h3>
        <p className="column-cards-card-description">{this.props.description}</p>
        <p className="column-cards-card-comments">Комментарии:{this.props.comments}</p>
      </li>

    const isOpen = this.state.isOpen;
    const opencard = (isOpen) &&
      <OpenCard
        title={this.props.title}
        description={this.props.description}
        author={this.props.author}
        comments={this.props.comments}
        close={this.cardClose}
        delete={this.cardDelete}
      />
    return(
      <>
        {card}
        {opencard}
      </>
    )
  }
}

export default Card;
