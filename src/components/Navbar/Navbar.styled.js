import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.palette.secondary.main};

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
  }
`;
