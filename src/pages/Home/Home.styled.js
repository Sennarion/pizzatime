import styled from '@emotion/styled';
import smallBg from 'assets/pizza@1x-min.jpg';
import largeBg from 'assets/pizza@2x-min.jpg';

export const Background = styled.div`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    background-image: url(${smallBg});
    background-size: cover;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${largeBg});
    }
  }
`;
