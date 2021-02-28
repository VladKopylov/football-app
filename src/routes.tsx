import React from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from './pages';

export function Routes(): JSX.Element {
  return <>{renderRoutes(routes)}</>;
}
