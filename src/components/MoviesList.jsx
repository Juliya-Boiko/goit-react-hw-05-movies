export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};
