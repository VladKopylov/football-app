import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';

import { selectStyles } from './dropdownStyles';

type Props = {
  options: any[];
  name: string;
  control: any;
  label?: string;
  handleChange?: () => void;
  selectedOption?: any;
};

export function Dropdown({
  options,
  label,
  name,
  control,
  handleChange,
  selectedOption,
}: Props) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Controller
        as={Select}
        name={name}
        options={options}
        control={control}
        onChange={handleChange}
        value={selectedOption}
        styles={selectStyles}
      />
    </div>
  );
}

const Label = styled.label``;
