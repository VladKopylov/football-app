import { Home } from './Home';
import { NotFound } from './NotFound';

export const routes = () => [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NotFound,
  },
];
