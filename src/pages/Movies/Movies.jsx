import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { getKeyWord } from 'axios/getKeyWord';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MainTitle } from 'components/common/MainTitle.styled';
import {
  MoviesContainer,
  SearchForm,
  SearchFormInput,
  SearchFormBtn,
  SearchFormBtnIcon,
} from './Movies.styled';

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
    const nextParams = value.query !== '' ? { name: value.query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MoviesContainer>
      <MainTitle>search movie by keyword</MainTitle>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={values => {
          handlerSubmit(values);
        }}
      >
        <SearchForm>
          <SearchFormInput
            type="text"
            name="query"
            placeholder="Enter a keyword"
          />
          <SearchFormBtn type="submit">
            <SearchFormBtnIcon />
          </SearchFormBtn>
        </SearchForm>
      </Formik>
      <MoviesList movies={searchResult} />
    </MoviesContainer>
  );
};

export default Movies;
