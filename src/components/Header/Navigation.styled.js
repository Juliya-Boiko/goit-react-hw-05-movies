import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 -10px;
`;

export const NavigationListItem = styled.li`
  margin: 0 10px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
