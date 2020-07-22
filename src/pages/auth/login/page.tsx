import React from 'react';

import { Card } from '../../../ui/atoms/Card';
import { CenterContentTemplate } from '../../../ui/templates/CenteredContent';
import { Container } from '../../../ui/templates/Container';
import { Col } from '../../../libs/styled-layouts';
import { LoginForm } from '../login/login-form/form';

export function LoginPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <LoginForm />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
}
