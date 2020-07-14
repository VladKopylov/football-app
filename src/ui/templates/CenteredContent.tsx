import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  footer: ReactNode;
};

export function CenterContentTemplate({
  children,
  footer,
}: Props): JSX.Element {
  return (
    <Centered>
      {children}
      {footer}
    </Centered>
  );
}

CenterContentTemplate.defaultProps = {
  footer: null,
};

const Centered = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
  flex-direction: column;
`;
