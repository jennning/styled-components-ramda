import styled, { css } from 'styled-components';
import { height, mobile, color } from 'theme';

export const StyledHeader = styled.header`
  height: ${height('headerDesktop')}px;
  background-color: ${color('grey')};

  ${mobile(css`
    height: ${height('headerDesktop')}px;
  `)}
`;
