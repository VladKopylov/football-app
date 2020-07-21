import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import { Input } from '../ui/atoms/Input';
import { Card } from '../ui/atoms/Card';
import { CenterContentTemplate } from '../ui/templates/CenteredContent';
import { OutlinedButton, PrimaryButton } from '../ui/atoms/Button';
import { Container } from '../ui/templates/Container';
import { Col, Row } from '../libs/styled-layouts';
import { H2 } from '../ui/atoms/Heading';

type FormData = {
  login: string;
  password: string;
};

export function LoginPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <LoginForm />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
}

function LoginForm(): JSX.Element {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col gap='1rem'>
          <H2>Вход на аккаунт</H2>
          <LoginField />
          <PasswordField />
          <Row justify='flex-end' gap='1rem'>
            <OutlinedButton>Назад</OutlinedButton>
            <PrimaryButton type='submit'>Войти</PrimaryButton>
          </Row>
        </Col>
      </form>
    </FormProvider>
  );
}

function LoginField(): JSX.Element {
  const { register } = useFormContext();

  return (
    <Input
      placeholder='Email / имя пользователя'
      name='login'
      myRef={register}
    />
  );
}
function PasswordField(): JSX.Element {
  const { register, errors } = useFormContext();
  return (
    <>
      <Input
        placeholder='Пароль'
        name='password'
        myRef={register({ required: 'This field is required' })}
        error={errors.password}
        type='password'
      />
    </>
  );
}
