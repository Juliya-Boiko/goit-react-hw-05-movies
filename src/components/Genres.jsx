export const Genres = ({ movieGenres }) => {
  // console.log(movieGenres);
  return (
    <ul>
      {movieGenres.map(genre => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};
