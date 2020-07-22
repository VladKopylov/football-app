import styled, { css } from 'styled-components';

type FlexPosition = 'center' | 'stretch' | 'flex-end';

export type MixinType = {
  justify?: FlexPosition;
  align?: FlexPosition;
  alignContent?: 'center';
  basis?: string;
  grow?: string;
  shrink?: string;
  order?: string;
  padding?: string;
  width?: string;
};

export const mixins = (props: MixinType) => css`
  ${props.alignContent || null};
  ${props.align ? { alignItems: props.align } : null};
  ${props.basis || null};
  ${props.grow || null};
  ${props.shrink || null};
  ${props.justify ? { justifyContent: props.justify } : null};
  ${props.order || null};
  ${props.padding || null};
  ${props.width ? { width: props.width } : null};
`;

export const Row = styled.div<MixinType & { gap?: string }>`
  display: flex;
  flex-direction: row;

  ${mixins}
  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `}
`;

export const Col = styled.div<MixinType & { gap?: string }>`
  display: flex;
  flex-direction: column;
  ${mixins}

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-top: ${p.gap};
      }
    `}
`;
