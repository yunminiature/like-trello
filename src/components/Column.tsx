import React, {Component} from 'react';

interface ColumnProps {
  title?: string;
}

interface ColumnState {
  isEdit?: boolean;
  title?: string
}

class Column extends Component<ColumnProps, ColumnState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      isEdit: false,
      title: this.props.title
    }
    this.titleEdit = this.titleEdit.bind(this);
  }

  titleEdit = (e?: any) => {
    this.setState({title: e.target.value})
  }

  titleEditBtn = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render(){
    const isEdit = this.state.isEdit;
    const title = (isEdit)
                    ?<textarea className="column-title-textarea" value={this.state.title} onChange={this.titleEdit}></textarea>
                    :<h2 className="column-title-textarea">{this.state.title}</h2>;
    return (
      <div className="column">
        <div className="column-title">
          {title}
          <button className="column-title-btn" onClick={this.titleEditBtn}>{isEdit ? "Сохранить" : "Изменить"}</button>
        </div>
        <div className="column-cards">
          {this.props.children}
        </div>
        <button className="column-btn"></button>
      </div>
    )
  }
}

export default Column;
