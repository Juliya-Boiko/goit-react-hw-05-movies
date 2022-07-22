import { HeaderContainer } from './Header.styled';
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  NavigationLink,
} from './Navigation.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  );
};
