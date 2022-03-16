import React from 'react';
import Column from './Column';
import CardsList from './CardsList'

function App() {
  return(
    <div>
      <header className="header">
        <h1>
          like-trello
        </h1>
      </header>
      <Column title="ToDo">
        <CardsList number="0"/>
      </Column>
      <Column title="InProgress">
        <CardsList number="1"/>
      </Column>
      <Column title="Testing">
        <CardsList number="2"/>
      </Column>
      <Column title="Done">
        <CardsList number="3"/>
      </Column>
    </div>
  );
}

export default App;
