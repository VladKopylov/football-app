import React from 'react';

import { Container, CenterContentTemplate } from 'ui/templates';
import { Col } from 'libs/styled-layouts';
import { Card } from 'ui/atoms';
import { NewTournamentForm } from './NewTournamentForm';

const NewTournamentPage = () => {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <NewTournamentForm />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
};

export { NewTournamentPage };
