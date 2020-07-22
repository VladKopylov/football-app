import { Home } from './Home';
import { LoginPage } from './auth/login/page';
import { NotFound } from './NotFound';

export const routes = () => [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    component: NotFound,
  },
];
