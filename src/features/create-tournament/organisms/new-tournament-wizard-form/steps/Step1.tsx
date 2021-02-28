import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { PrimaryButton } from 'ui/atoms/Button';
import { Urls } from 'constants/urls';

const Step1 = ({ history }: RouteComponentProps) => {
  const handleClickNextBtn = () => {
    history.push(`${Urls.NEW_TOURNAMENT}/step2`);
  };

  return (
    <div>
      <h1>Step1</h1>
      <PrimaryButton onClick={handleClickNextBtn}>Next</PrimaryButton>
    </div>
  );
};

export { Step1 };
