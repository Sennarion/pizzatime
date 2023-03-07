import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    svg {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    &.active {
      color: ${({ theme }) => theme.palette.secondary.main};

      svg {
        fill: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }
`;
