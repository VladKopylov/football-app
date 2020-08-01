import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Navbar(): JSX.Element {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <AuthSection>
        <NavLink to='/auth/login'>Войти</NavLink>
        <NavLink to='/auth/create-account'>Cоздать аккаунт</NavLink>
      </AuthSection>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4e8098;
  height: 10vh;
  box-shadow: -2px -2px 47px 11px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 18px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c2fffe;
  }
`;

const Logo = styled.a`
  font-size: 22px;
`;

const AuthSection = styled.div`
  display: flex;
  height: 100%;
`;

const NavLink = NavItem.withComponent(Link);
