import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Col, Row } from 'libs/styled-layouts';
import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Datepicker } from 'ui/molecules/datepicker';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay: string;
  leadingLeg: number;
};

export function CreateAccountForm(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<FormData>();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const onSubmit = (data: FormData) => {
    console.log('data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Col gap='1rem'>
        <H2>Создание аккаунта</H2>
        <Row justify='space-between'>
          {/*<Input placeholder='Имя' name='firstName' myRef={register} />*/}
          {/*<Input placeholder='Фамилия' name='lastName' myRef={register} />*/}
        </Row>
        <Row justify='space-between' align='center'>
          <Datepicker
            placeholder='Дата рождения'
            name='birthDay'
            myRef={register}
          />
          24 года
        </Row>
        {/*<Input placeholder='Email' name='email' myRef={register} />*/}
        {/*<Input*/}
        {/*  placeholder='Пароль'*/}
        {/*  name='password'*/}
        {/*  type='password'*/}
        {/*  myRef={register}*/}
        {/*/>*/}
        {/*<Input placeholder='Ведущая нога' name='leadingLeg' myRef={register} />*/}
        <Row justify='flex-end' gap='1rem'>
          <OutlinedButton onClick={handleBack}>Назад</OutlinedButton>
          <PrimaryButton type='submit'>Создать аккаунт</PrimaryButton>
        </Row>
      </Col>
    </form>
  );
}
