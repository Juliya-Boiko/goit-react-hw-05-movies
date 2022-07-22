import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location.pathname, location.search);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{
                from: {
                  pathname: location.pathname,
                  query: location.search,
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
