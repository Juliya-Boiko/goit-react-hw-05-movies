import { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { searchParams, getKeyWord } from 'API/getKeyWord';
import { MoviesList } from 'components/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    } else {
      searchParams.query = query;
      getKeyWord().then(result => {
        // console.log(result.data.results);
        setSearchResult(result.data.results);
      });
    }
  }, [query]);

  const handlerSubmit = value => {
    setQuery(value.query);
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
