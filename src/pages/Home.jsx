import { useState, useEffect } from 'react';
import { getTrending } from 'API/getTrending';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
