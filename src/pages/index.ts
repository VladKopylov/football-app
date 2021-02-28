import { Urls } from 'constants/urls';
import { Home } from './Home';
import { LoginPage } from './auth/login/page';
import { CreateAccountPage } from './auth/create-account/page';
import { NotFound } from './NotFound';
import { NewTournamentPage } from './new-tournament/page';
import {
  Step1,
  Step2, Step3,
} from 'features/create-tournament/organisms/new-tournament-wizard-form/steps';

export const routes = [
  {
    path: Urls.MAIN,
    exact: true,
    component: Home,
  },
  {
    path: Urls.LOGIN,
    exact: true,
    component: LoginPage,
  },
  {
    path: Urls.CREATE_ACCOUNT,
    exact: true,
    component: CreateAccountPage,
  },
  {
    path: Urls.NEW_TOURNAMENT,
    component: NewTournamentPage,
    routes: [
      {
        path: Urls.NEW_TOURNAMENT + '/step1',
        component: Step1,
      },
      {
        path: Urls.NEW_TOURNAMENT + '/step2',
        component: Step2,
      },
      {
        path: Urls.NEW_TOURNAMENT + '/step3',
        component: Step3,
      },
    ],
  },
  {
    component: NotFound,
  },
];
