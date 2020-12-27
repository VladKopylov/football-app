/*eslint-disable react/display-name*/

import React, { forwardRef } from 'react';
import { Controller, Control, Ref } from 'react-hook-form';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import { Input } from 'ui/atoms';
import { localeUtils } from './constants';

import 'react-day-picker/lib/style.css';

type Props = {
  placeholder: string;
  name: string;
  label: string;
  defaultValue?: string;
  control: Control;
  register: Ref;
};

const Datepicker = forwardRef(
  (
    { placeholder, label, control, name, register, defaultValue = null }: Props,
    ref,
  ) => {
    return (
      <Controller
        as={DayPickerInput}
        defaultValue={defaultValue}
        name={name}
        control={control}
        component={Input}
        inputProps={{ placeholder, label, name, ref: register }}
      />
      // onDayChange={(day) => console.log(day)}
      // <div>
      //   <DayPickerInput
      //     onDayChange={(day) => console.log(day)}
      //     component={(props) => {
      //         console.log('props:', props);
      //       return (
      //         <Input
      //           {...props}
      //         />
      //       );
      //     }}
      //   />
      // </div>
    );
  },
);

export { Datepicker };
