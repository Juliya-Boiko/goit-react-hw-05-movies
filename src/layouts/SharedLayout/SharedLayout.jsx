import { Outlet } from 'react-router-dom';
import { Header } from 'layouts/SharedLayout/Header/Header';
import { MainContainer } from 'layouts/SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
};
