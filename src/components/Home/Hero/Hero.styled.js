import styled from 'styled-components';
import { height, fontSize, fontFamily, space } from 'theme';
import { StyledButton } from '../../Button/Button.styled';

export const StyledSection = styled.section`
  height: calc(100vh - ${height('headerDesktop')}px);
  display: flex;
`;

export const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: ${fontSize('xlarge')};
  font-family: ${fontFamily('sans')};
  text-align: center;
  margin-bottom: ${space(4)};
  line-height: 1.6;
`;

export const HeroButton = styled(StyledButton)`
  animation: enter 0.6s ease;

  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;
