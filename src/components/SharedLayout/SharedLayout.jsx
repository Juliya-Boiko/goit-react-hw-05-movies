import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';

export const SharedLayuot = () => {
  return (
    <div>
      <Header />
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
