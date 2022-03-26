import React, {useContext} from 'react';
import styled from 'styled-components';

import {UserNameContext} from '../../contexts/UserNameContext'

const UserName: React.FC = () => {

  const {userName, addUserName, toggleAddUserName} = useContext(UserNameContext);

  return(
    <UserNamePopUp>
      <UserNameText>Как тебя зовут?</UserNameText>
      <UserNameInput type="text" value={userName} onChange={addUserName}/>
      <UserNameButton onClick={toggleAddUserName}>Принять</UserNameButton>
    </UserNamePopUp>
  )
}

const UserNamePopUp = styled.div`
  margin: 50px auto;
  padding: 40px;
  width:50%;
  min-width: 400px;
  border: 0px;
  border-radius: 20px;
  background-color: #6e60ff;
`

const UserNameText = styled.p`
  margin: 0 0 40px;
  color: #fff;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
`

const UserNameInput = styled.input`
  width: 70%;
  margin: 0 60px 0 0;
  padding: 8px 18px;
  border: 0px;
  border-radius: 10px;
  background-color: #fff;
  color: #6e60ff;
  font-size: 24px;
  line-height: 24px;
  font-family: consolas;
`

const UserNameButton = styled.button`
  padding: 11px 20px;
  border: 0px;
  border-radius: 10px;
  background-color: #fff;
  color: #6e60ff;
  font-size: 24px;
  line-height: 24px;
  font-family: consolas;
`

export default UserName;
