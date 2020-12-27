/*eslint-disable react/display-name*/

import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { Col } from 'libs/styled-layouts';

type Props = {
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  autoComplete?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: () => void;
  onKeyUp?: () => void;
  error?: { message?: string };
};

type InputComponentProps = {
  error: boolean;
  ref: any;
};

const Input = forwardRef(
  (
    {
      autoComplete = 'off',
      name,
      value,
      placeholder,
      type,
      label,
      onClick,
      onChange,
      onBlur,
      error,
    }: Props,
    ref,
  ): JSX.Element => {
    return (
      <Col>
        {label && <LabelInput>{label}</LabelInput>}
        <InputComponent
          autoComplete={autoComplete}
          name={name}
          value={value}
          placeholder={placeholder}
          ref={ref}
          error={Boolean(error)}
          type={type}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
        />
        {error && <ErrorInput>{error.message}</ErrorInput>}
      </Col>
    );
  },
);

export { Input };

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

const LabelInput = styled.label``;

const ErrorInput = styled.label`
  color: red;
  margin-top: 5px;
`;
