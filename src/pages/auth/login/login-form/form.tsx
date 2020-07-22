import React from 'react';
import { useForm } from 'react-hook-form';

import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Col, Row } from 'libs/styled-layouts';

type FormData = {
  login: string;
  password: string;
};

export function LoginForm(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<FormData>();

  const onSubmit = (data: any) => console.log(data);

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
          <OutlinedButton>Назад</OutlinedButton>
          <PrimaryButton type='submit'>Войти</PrimaryButton>
        </Row>
      </Col>
    </form>
  );
}
