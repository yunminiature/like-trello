import React from 'react';

interface OpenCardProps {
  title?: string;
  description?: string;
  author?: string;
  comments?: number;
  close?: any;
  delete?: any;
}

interface OpenCardState {

}

class OpenCard extends React.Component<OpenCardProps, OpenCardState> {
  constructor(props?: any) {
    super(props);
    this.state = {

    }
  }

  opencardClose = () => {
    this.props.close(true);
  }

  opencardDelete = () => {
    this.props.delete(true);
  }

  render(){
    return(
      <div className="opencard">
        <button className="opencard-btn" onClick={this.opencardClose}>Закрыть</button>
        <h3 className="opencard-title">{this.props.title}</h3>
        <p className="opencard-description">{this.props.description}</p>
        <p className="opencard-author">{this.props.author}</p>
        <button className="opencard-delete-btn" onClick={this.opencardDelete}>Удалить</button>
      </div>
    )
  }
}

export default OpenCard;
