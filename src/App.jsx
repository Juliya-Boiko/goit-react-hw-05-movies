import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Header } from 'components/Header/Header';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Credits } from 'components/Credits/Credits';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
