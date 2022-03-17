import React from 'react';
import Column from './Column';
import CardsList from './CardsList'
import Username from './Username'

interface AppProps {
}

interface AppState {
  username?: string;
}

class App extends React.Component<AppProps,AppState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      username: "",
    }
  }

  usernameAdd = (name?: string) => {
    this.setState({username: name});
  }

  render(){
    return(
      <div>
        <header className="header">
          <h1>
            like-trello
          </h1>
        </header>
        <main className="main">
          <Username username={this.state.username} usernameChange={this.usernameAdd}/>
          <Column title="ToDo">
            <CardsList number="0" username={this.state.username}/>
          </Column>
          <Column title="InProgress">
            <CardsList number="1" username={this.state.username}/>
          </Column>
          <Column title="Testing">
            <CardsList number="2" username={this.state.username}/>
          </Column>
          <Column title="Done">
            <CardsList number="3" username={this.state.username}/>
          </Column>
        </main>
      </div>
    )
  }
}

export default App;
