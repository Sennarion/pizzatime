import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.palette.primary.main};

  &.active {
    color: ${({ theme }) => theme.palette.primary.dark};
    text-decoration: underline;
  }
`;
