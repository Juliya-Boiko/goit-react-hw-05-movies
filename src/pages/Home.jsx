import { useState, useEffect } from 'react';
import { getTrending } from 'API/getTrending';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading & <p>Loading...</p>}
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
