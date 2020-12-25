import React from 'react';
import { gql, useApolloClient, useQuery } from '@apollo/client';

import { ContentTemplate } from 'ui/templates/ContentTemplate';
import { PrimaryButton } from 'ui/atoms';
import { ME } from 'features/auth/apollo/queries';

export function Home(): JSX.Element {
  const client = useApolloClient();
  console.log('client:', client);
  console.log(
    'query:',
    client.readQuery({
      query: ME,
    }),
  );

  const { data, error } = useQuery(ME);

  return (
    <ContentTemplate>
      <div>Hello</div>
    </ContentTemplate>
  );
}
