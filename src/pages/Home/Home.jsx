import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
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

export default Home;
