import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Col, Row } from 'libs/styled-layouts';

type FormData = {
  login: string;
  password: string;
};

export function LoginForm(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<FormData>();
  const history = useHistory();

  const onSubmit = (data: any) => console.log(data);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Col gap='1rem'>
        <H2>Вход на аккаунт</H2>
        <Input
          placeholder='Email / имя пользователя'
          name='login'
          myRef={register}
        />
        <Input
          placeholder='Пароль'
          name='password'
          myRef={register({ required: 'Это поле обязательно' })}
          error={errors.password}
          type='password'
        />
        <Row justify='flex-end' gap='1rem'>
          <OutlinedButton onClick={handleBack} type='button'>
            Назад
          </OutlinedButton>
          <PrimaryButton type='submit'>Войти</PrimaryButton>
        </Row>
      </Col>
    </form>
  );
}
