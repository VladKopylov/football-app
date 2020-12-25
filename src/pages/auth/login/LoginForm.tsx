import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { LOGIN } from 'features/auth/apollo/queries';
import { Col, Row } from 'libs/styled-layouts';
import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { useLocalStorage } from 'libs/hooks/useLocalStorage';
import { Urls } from 'constants/urls';

type FormData = {
  login: string;
  password: string;
};

export function LoginForm(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<FormData>();
  const history = useHistory();
  const [login] = useMutation(LOGIN);
  const [userToken, setToken] = useLocalStorage('userToken', null);

  const onSubmit = async (formValues: FormData) => {
    try {
      console.log('formValues:', formValues);
      const { data } = await login({ variables: formValues });
      console.log('data:', data);
      setToken(data.login.token);
      history.push(Urls.MAIN);
    } catch (e) {
      console.log('e:', e.message);
    }
  };

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
          ref={register}
        />
        <Input
          placeholder='Пароль'
          name='password'
          ref={register({ required: 'Это поле обязательно' })}
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
