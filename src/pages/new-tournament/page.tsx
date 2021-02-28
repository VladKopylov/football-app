import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import { Container, CenterContentTemplate } from 'ui/templates';
import { Col } from 'libs/styled-layouts';
import { Card } from 'ui/atoms';
import { NewTournamentWizardForm } from 'features/create-tournament/organisms/new-tournament-wizard-form/NewTournamentWizardForm';

type Props = RouteConfigComponentProps;

const NewTournamentPage = ({ route }: Props) => {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <NewTournamentWizardForm routes={route.routes} />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
};

export { NewTournamentPage };
