import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';
import { MainContainer } from 'components/common/MainContainer.styled';

export const SharedLayuot = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};
