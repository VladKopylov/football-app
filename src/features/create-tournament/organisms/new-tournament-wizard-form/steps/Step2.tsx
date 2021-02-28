import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Urls } from 'constants/urls';
import { PrimaryButton, OutlinedButton } from 'ui/atoms/Button';

const Step2 = ({ history }: RouteComponentProps) => {
  const handleClickNext = () => {
    history.push(`${Urls.NEW_TOURNAMENT}/step3`);
  };

  const handleClickBack = () => {
    history.push(`${Urls.NEW_TOURNAMENT}/step1`);
  };

  return (
    <div>
      <h1>Step2</h1>
      <div>
        <OutlinedButton onClick={handleClickBack}>Back</OutlinedButton>
        <PrimaryButton onClick={handleClickNext}>Next</PrimaryButton>
      </div>
    </div>
  );
};

export { Step2 };
