import styled from '@emotion/styled';
import heroImgSmall from 'assets/hero-pizza-1x.jpg';
import heroImgLarge from 'assets/hero-pizza-2x.jpg';

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${heroImgSmall});
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroImgLarge});
  }
`;
