import React from 'react';
import styled from 'styled-components';

const Username: React.FC<{
  username: string;
  useUsername: any; // any потому что пока не поняла какой тут тип, потом исправлю
  useIsUse: any;
}> = (props) => {

  const usernameToBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.useUsername(e.target.value);
  }

  return(
    <UsernamePopUp>
      <p>Как тебя зовут?</p>
      <input type="text" value={props.username} onChange={usernameToBoard}></input>
      <button onClick={props.useIsUse}>Принять</button>
    </UsernamePopUp>
  )
}

const UsernamePopUp = styled.div`
  margin: 40px auto;
  padding: 40px;
  width:40%;
  min-width: 400px;
  border: 0px;
  border-radius: 20px;
  background-color: #6e60ff;

  p {
    margin: 0 0 40px;
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
  }

  input, button{
    border: 0px;
    border-radius: 10px;
    background-color: #fff;
    color: #6e60ff;
    font-size: 24px;
    line-height: 24px;
    font-family: consolas;
  }

  input{
    width: 60%;
    margin: 0 60px 0 0;
    padding: 8px 18px;
  }

  button{
    padding: 11px 20px;
  }
`

export default Username;
