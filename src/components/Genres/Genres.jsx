import PropTypes from 'prop-types';

export const Genres = ({ movieGenres }) => {
  return (
    <ul>
      {movieGenres.map(genre => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

Genres.propTypes = {
  movieGenres: PropTypes.array.isRequired,
};
