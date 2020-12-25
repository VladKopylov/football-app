import { Urls } from 'constants/urls';
import { Home } from './Home';
import { LoginPage } from './auth/login/page';
import { CreateAccountPage } from './auth/create-account/page';
import { NotFound } from './NotFound';

export const routes = () => [
  {
    path: Urls.MAIN,
    exact: true,
    component: Home,
  },
  {
    path: '/auth/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/auth/create-account',
    exact: true,
    component: CreateAccountPage,
  },
  {
    component: NotFound,
  },
];
