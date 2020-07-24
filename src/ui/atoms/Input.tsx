import React, { RefCallback } from 'react';
import styled, { css } from 'styled-components';

import { Col } from 'libs/styled-layouts';

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  myRef: RefCallback<HTMLInputElement>;
  label?: string;
  autoComplete?: string;
  error?: { message?: string };
};

export function Input({
  autoComplete = 'off',
  name,
  myRef,
  placeholder,
  type,
  label,
  error,
}: Props): JSX.Element {
  return (
    <Col>
      {label && <LabelInput />}
      <InputComponent
        autoComplete={autoComplete}
        name={name}
        placeholder={placeholder}
        ref={myRef}
        error={Boolean(error)}
        type={type}
      />
      {error && <ErrorInput>{error.message}</ErrorInput>}
    </Col>
  );
}

const InputComponent = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #858585;
  outline: none;
  transition: box-shadow 120ms, border-color 120ms;

  &:focus {
    border-color: #292929;
  }

  ${(p: InputComponentProps) =>
    p.error &&
    css`
      && {
        border-color: red;
      }
    `}
`;

Input.defaultProps = {
  autoComplete: 'off',
};

type InputComponentProps = {
  error: boolean;
};

const LabelInput = styled.label``;

const ErrorInput = styled.label`
  color: red;
  margin-top: 5px;
`;
