import React, {FC} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import styled from 'styled-components';
import {useAppDispatch} from '../../store/index'
import {addUserName} from '../../store/UserName/actions'

import DefaultButton from '../../ui/DefaultButton';
import DefaultInput from '../../ui/DefaultInput';

interface InputsUserName{
  userName: string;
}

const UserName:FC = () => {

  const dispatch = useAppDispatch()

  const {register} = useForm<InputsUserName>()
  const onSubmit: SubmitHandler<InputsUserName> = data =>{
    dispatch(addUserName(data.userName))
  }

  return(
    <UserNamePopUp>
      <form>
        <label>
          Как тебя зовут?
          <DefaultInput {...register("userName")} type="text"/>
        </label>
        <DefaultButton type="submit" value="Принять"/>
      </form>
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

export default UserName;
