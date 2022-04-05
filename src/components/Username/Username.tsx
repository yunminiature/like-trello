import React, {FC} from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import styled from 'styled-components';
import {useAppDispatch} from '../../store/index'
import {addUserName} from '../../store/UserName/actions'

import DefaultInput from '../../ui/DefaultInput';

interface InputsUserName{
  userName: string;
}

const UserName:FC = () => {

  const dispatch = useAppDispatch()

  const {handleSubmit, control} = useForm<InputsUserName>({defaultValues:{userName:""}})
  const onSubmit: SubmitHandler<InputsUserName> = data =>{
    dispatch(addUserName(data.userName))
  }

  return(
    <UserNamePopUp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserNameTitle>Как тебя зовут?</UserNameTitle>
        <Controller
          control={control}
          name="userName"
          rules={{
            required:"Обязательное поле"
          }}
          render={({field:{onChange, value}}) => (
            <DefaultInput
              type="text"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
              }}
            />
          )}
        />
        <UserNameButton type="submit">Принять</UserNameButton>
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

const UserNameTitle = styled.h2`
  font-size: 32px;
  line-height: 32px;
  color: #fff;
`

const UserNameButton = styled.button`
  padding: 12px 20px;
  border: 0px;
  border-radius: 10px;
  font-family: consolas;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  color: #6e60ff;
  background-color: #fff;
`

export default UserName;
