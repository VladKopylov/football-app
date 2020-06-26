import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: red;
  padding: 11px;
`;

type Prop = {
  lang: string;
};

const App = ({ lang }: Prop): JSX.Element => {
  return (
    <div className='container'>
      I can speak not only on {lang}
      <Btn>Click</Btn>
    </div>
  );
};

export { App };
