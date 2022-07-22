import { HeaderContainer } from './Header.styled';
import {
  NavigationList,
  NavigationListItem,
  NavigationLink,
  NavigationLinkIconHome,
  NavigationLinkIconMovie,
} from './Navigation.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink to="/">
              <NavigationLinkIconHome />
              Home
            </NavigationLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationLink to="/movies">
              <NavigationLinkIconMovie />
              Movies
            </NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </nav>
    </HeaderContainer>
  );
};
