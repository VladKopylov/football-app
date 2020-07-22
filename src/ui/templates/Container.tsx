import styled from 'styled-components';

import { mixins, MixinType } from '../../libs/styled-layouts';

export const Container = styled.div<MixinType>`
  ${mixins};

  max-width: 120rem;
  width: 100%;
  display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
`;
