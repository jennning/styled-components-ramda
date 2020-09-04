import { css } from 'styled-components';
import { breakpoint } from './accessors';

export const px = x => `${x}px`;

export const rem = x => `${x / 16}rem`;

export const mobile = content => css`
  @media all and (max-width: ${breakpoint('mobile')}) {
    ${content}
  }
`;

export const tablet = content => css`
  @media all and (max-width: ${breakpoint('tablet')}) {
    ${content}
  }
`;
