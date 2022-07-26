import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getKeyWord } from 'api/getKeyWord';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MainTitle } from 'components/common/MainTitle.styled';
import { MoviesContainer } from './Movies.styled';
import { toast } from 'react-toastify';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let filmName = searchParams.get('name') ?? '';
    if (filmName === '') {
      return;
    } else {
      getKeyWord({
        query: filmName,
        page: 1,
      }).then(result => {
        setSearchResult(result.data.results);
      });
    }
  }, [searchParams]);

  const handlerSubmit = value => {
    if (value.query.trim() === '') {
      toast('Please, enter a word', {});
      return;
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <MoviesContainer>
      <MainTitle>search movie by keyword</MainTitle>
      <SearchForm onSubmit={handlerSubmit} />
      <MoviesList movies={searchResult} />
    </MoviesContainer>
  );
};

export default Movies;
