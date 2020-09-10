import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../../../features/auth/apollo/queries';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Col, Row } from 'libs/styled-layouts';
import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Datepicker } from 'ui/molecules/datepicker';
import { Dropdown } from 'ui/molecules/dropdown';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay: string;
  leadingLeg: number;
};

export function CreateAccountForm(): JSX.Element {
  const { handleSubmit, register, control, errors } = useForm<FormData>();
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
          <Input
            placeholder='Введите имя...'
            label='Имя'
            name='firstName'
            myRef={register}
          />
          <Input
            placeholder='Введите фамилию...'
            label='Фамилия'
            name='lastName'
            myRef={register}
          />
        </Row>
        <Row justify='space-between' align='center'>
          <Datepicker
            placeholder='Дата рождения'
            name='birthDay'
            myRef={register}
          />
          24 года
        </Row>
        <Input
          label='Email'
          placeholder='Введите email...'
          name='email'
          myRef={register}
        />
        <Input
          label='Пароль'
          placeholder='Введите пароль'
          name='password'
          type='password'
          myRef={register}
        />
        <Dropdown
          name='leadingLeg'
          label='Ведущая нога'
          control={control}
          options={[
            { value: 1, label: 'Левая' },
            { value: 2, label: 'Правая' },
          ]}
        />
        <Row justify='flex-end' gap='1rem'>
          <OutlinedButton onClick={handleBack}>Назад</OutlinedButton>
          <PrimaryButton type='submit'>Создать аккаунт</PrimaryButton>
        </Row>
      </Col>
    </form>
  );
}
