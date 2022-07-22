import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { MainTitle } from 'components/common/MainTitle.styled';
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
      <MainTitle>today's trending movies</MainTitle>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
