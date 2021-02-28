import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { OutlinedButton, PrimaryButton } from 'ui/atoms';
import { Urls } from 'constants/urls';

const Step3 = ({ history }: RouteComponentProps) => {
  const handleClickBack = () => {
    history.push(`${Urls.NEW_TOURNAMENT}/step2`);
  };
  return (
    <div>
      <h1>Step3</h1>
      <div>
        <OutlinedButton onClick={handleClickBack}>Back</OutlinedButton>
        <PrimaryButton>Create</PrimaryButton>
      </div>
    </div>
  );
};

export { Step3 };
