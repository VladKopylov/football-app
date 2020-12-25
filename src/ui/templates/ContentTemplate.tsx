import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { MainTemplate } from './MainTemplate';
import { Navbar } from '../organisms/Navbar';

type Props = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

function ContentTemplate({ header, children, footer }: Props): JSX.Element {
  return (
    <MainTemplate header={header} footer={footer}>
      <CommonContent>{children}</CommonContent>
    </MainTemplate>
  );
}

ContentTemplate.defaultProps = {
  header: <Navbar />,
  footer: null,
};

export const CommonContent = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export { ContentTemplate };
