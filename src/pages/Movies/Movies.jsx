import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { getKeyWord } from 'api/getKeyWord';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={values => {
          handlerSubmit(values);
        }}
      >
        <Form>
          <Field type="text" name="query" placeholder="Enter a keyword" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MoviesList movies={searchResult} />
    </div>
  );
};

export default Movies;
