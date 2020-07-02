import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

function MainTemplate({ header, children, footer }: Props) {
  return (
    <MainContainer>
      {header && <Header>{header}</Header>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: grid;
  min-height: 100vh;
  max-height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    '.'
    'footer';
  flex-grow: 1;
`;

const Header = styled.header`
  grid-area: header;
  z-index: 1;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export { MainTemplate };
