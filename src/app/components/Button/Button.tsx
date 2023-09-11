import styled, { css } from 'styled-components';

export const Button = styled.a<{ $primary?: boolean; }>`
  --accent-color: #5ADB01;

  /* This renders the buttons above... Edit me! */
  background: transparent;
  border-radius: 0.5rem /* 8px */;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;
  text-align: center;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  ${props => props.$primary && css`
    background: var(--accent-color);
    color: black;
  `}
`