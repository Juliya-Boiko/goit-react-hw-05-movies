import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

// import { getFullInfo } from 'API/getFullInfo';
// import { getCredits } from 'API/getCredits';
// import { getReviews } from 'API/getReviews';

//   getFullInfo().then(result => {
//     // console.dir(result.data);
//   });

//   getCredits().then(result => {
//     // console.dir(result.data.cast);
//   });

//   getReviews().then(result => {
//     // console.dir(result.data.results);
//   });

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
