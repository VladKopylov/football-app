import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import { Input } from '../ui/atoms/Input';
import { CenterContentTemplate } from '../ui/templates/CenteredContent';
import { PrimaryButton } from '../ui/atoms/Button';

type FormData = {
  login: string;
  password: string;
};

export function LoginPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <LoginForm />
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
        <LoginField />
        <PasswordField />
        <PrimaryButton type='submit'>Login</PrimaryButton>
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
        myRef={register({ required: true })}
        type='password'
      />
      {errors.password && <span>This field is required</span>}
    </>
  );
}
