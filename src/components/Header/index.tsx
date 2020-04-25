import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link
          to="/"
          className={useRouteMatch().path === '/' ? 'active' : undefined}
        >
          Listagem
        </Link>
        <Link
          to="/import"
          className={useRouteMatch().path === '/import' ? 'active' : undefined}
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
