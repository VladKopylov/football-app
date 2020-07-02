import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return <Nav>Navbar content</Nav>;
}

const Nav = styled.nav`
  background-color: #4e8098;
  padding: 25px;
  box-shadow: -2px -2px 47px 11px rgba(0, 0, 0, 0.5);
`;

export { Navbar };
