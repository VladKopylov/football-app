import React from 'react';

import { CenterContentTemplate } from 'ui/templates/CenteredContent';
import { Container } from 'ui/templates/Container';
import { Col } from 'libs/styled-layouts';
import { Card } from 'ui/atoms';
import { CreateAccountForm } from './CreateAccountForm';

export function CreateAccountPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <CreateAccountForm />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
}
