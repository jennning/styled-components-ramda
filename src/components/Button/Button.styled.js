import styled from 'styled-components';
import { height, color, space } from 'theme';

export const StyledButton = styled.button`
  height: ${height('button')}px;
  padding: 0 ${space(2)};
  border: 0;
  background-color: ${color('primary')};
  color: ${color('white')};
`;
