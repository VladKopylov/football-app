import styled, { css } from 'styled-components';

type ButtonProps = {
  small?: boolean;
  medium?: boolean;
};

const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 8px 20px;
  text-decoration: none;
  transition: background-color 200ms, color 200ms;
  user-select: none;

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #c2c2c2;
    border-color: #3d3d3d;
    color: #3d3d3d;
    cursor: not-allowed;
  }

  ${({ small }: ButtonProps) =>
    small &&
    css`
      padding: 4px 8px;
      font-size: 12px;
    `}

  ${({ medium }: ButtonProps) =>
    medium &&
    css`
      padding: 6px 12px;
      font-size: 16px;
    `}
`;

export const PrimaryButton = styled(Button)`
  border: 1px solid #103c42;
  color: white;
  background-color: #103c42;

  &:hover {
    background-color: #0c2d31;
    color: white;
  }

  &:focus {
    box-shadow: -3px 4px 21px -7px rgba(0, 0, 0, 0.75);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #c2c2c2;
    border-color: #3d3d3d;
    color: #3d3d3d;
    cursor: not-allowed;
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid #103c42;
  color: #103c42;
  background-color: white;

  &:hover {
    background-color: #103c42;
    color: white;
  }

  &:focus {
    box-shadow: -3px 4px 21px -7px rgba(0, 0, 0, 0.75);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #c2c2c2;
    border-color: #3d3d3d;
    color: #3d3d3d;
    cursor: not-allowed;
  }
`;
