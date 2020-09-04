import styled, { css } from 'styled-components';
import { width, mobile, fontSize, fontFamily, space } from 'theme';

export const StyledContainer = styled.section`
  width: ${width('container')}px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;

  ${mobile(css`
    display: block;
  `)}
`;

export const StyledTitle = styled.h2`
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize('large')};
  text-align: center;
  margin-bottom: ${space(4)};
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  padding: 0 ${space(4)};

  ${mobile(css`
    & + & {
      margin-top: ${space(4)};
    }
  `)}
`;
