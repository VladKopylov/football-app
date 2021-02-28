import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Col, Row } from 'libs/styled-layouts';
import { H2, Input, OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Option } from 'models/Option';

type FormData = {
  tournamentName: string;
  tournamentFormat: Option;
};

const FormValidation = {
  tournamentName: { required: 'Это поле обязательно' },
  tournamentFormat: { required: 'Это поле обязательно' },
};

const NewTournamentForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  // const [login] = useMutation(LOGIN);

  const onSubmit = async (formValues: FormData) => {
    try {
      console.log('formValues:', formValues);
      // history.push(Urls.MAIN);
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
        <H2>Создание нового соревнования</H2>
        <Input
          label='Название турнира'
          name='tournamentName'
          placeholder='Введите название...'
          ref={register(FormValidation.tournamentName)}
          error={errors.tournamentName}
        />
        <Input
          label='Формат турнира'
          name='tournamentFormat'
          placeholder='Выберите формат'
          ref={register(FormValidation.tournamentFormat)}
          error={errors.tournamentFormat}
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
};

export { NewTournamentForm };
