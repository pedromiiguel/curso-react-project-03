import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
  `}
`;
