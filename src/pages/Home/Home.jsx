import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { HomeTitle } from './Home.styled';
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
      <HomeTitle>today's trending movies</HomeTitle>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
