import React from 'react';

interface ColumnProps {
  title?: string;
}

interface ColumnState {
  isEdit?: boolean;
  columnTitle?: string;
}

class Column extends React.Component<ColumnProps, ColumnState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      isEdit: false,
      columnTitle: this.props.title
    }
  }

  titleEdit = (e?: any) => {
    this.setState({columnTitle: e.target.value})
  }

  titleEditBtn = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render(){
    const isEdit = this.state.isEdit;
    const title = (isEdit)
                    ?<input type="text" className="column-title-input" value={this.state.columnTitle} onChange={this.titleEdit}></input>
                    :<h2 className="column-title-text">{this.state.columnTitle}</h2>;

    return (
      <div className="column">
        <div className="column-title">
          {title}
          <button className="column-title-btn" onClick={this.titleEditBtn}>{isEdit ? "Сохранить" : "Изменить"}</button>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Column;
