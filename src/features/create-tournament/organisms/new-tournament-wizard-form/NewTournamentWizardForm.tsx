import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { StateMachineProvider, createStore } from 'little-state-machine';

createStore({
  data: {},
});

type Props = {
  routes: RouteConfig[];
};

const NewTournamentWizardForm = ({ routes }: Props) => {
  return <StateMachineProvider>{renderRoutes(routes)}</StateMachineProvider>;
};

export { NewTournamentWizardForm };
