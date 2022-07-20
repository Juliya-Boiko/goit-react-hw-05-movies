import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { MoviesList } from 'components/MoviesList';
import { MainContainer } from 'components/common/MainContainer.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <MainContainer>
      <MoviesList movies={trendingMovies} />
    </MainContainer>
  );
};
