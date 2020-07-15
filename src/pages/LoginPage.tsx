import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../ui/atoms/Input';
import { CenterContentTemplate } from '../ui/templates/CenteredContent';
import { PrimaryButton } from '../ui/atoms/Button';

export function LoginPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <LoginForm />
    </CenterContentTemplate>
  );
}

function LoginForm(): JSX.Element {
  const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='Email / имя пользователя'
        name='email'
        myRef={register}
      />
      <Input
        placeholder='Пароль'
        name='password'
        myRef={register({ required: true })}
        type='password'
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <PrimaryButton type='submit'>Login</PrimaryButton>
    </form>
  );
}
