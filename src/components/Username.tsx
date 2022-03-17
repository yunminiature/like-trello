import React from 'react';

interface UsernameProps {
  username?: string;
  usernameChange?: any;
}

interface UsernameState {
  isOpen?: boolean;
}

class Username extends React.Component<UsernameProps, UsernameState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  usernameEdit = (e?: any) => {
    this.props.usernameChange(e.target.value);
  }

  usernameEditBtn = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    const name = this.props.username;
    const isOpen = this.state.isOpen;
    const username = (isOpen) &&
      <div className="username">
        <p className="username-text">Как вас зовут?</p>
        <input type="text" className="username-input" value={name} onChange={this.usernameEdit}></input>
        <button className="username-btn" onClick={this.usernameEditBtn}>Принять</button>
      </div>

    return(
      <>
        {username}
      </>
    )
  }
}

export default Username;
