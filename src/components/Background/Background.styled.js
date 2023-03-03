import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const animate = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    background-size: 300% 300%;
    background-image: linear-gradient(
      -45deg,
      ${({ theme }) => theme.palette.secondary.main} 0%,
      ${({ theme }) => theme.palette.primary.main} 25%,
      ${({ theme }) => theme.palette.primary.main} 51%,
      ${({ theme }) => theme.palette.secondary.main} 100%
    );
    animation: ${animate} 10s ease infinite;
  }
`;
