import { Formik } from 'formik';
import { SearchingForm, SearchFormInput } from './SearchForm.styled';
import { SearchButton } from 'components/SearchButton/SearchButton';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SearchingForm>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Enter a keyword"
        />
        <SearchButton />
      </SearchingForm>
    </Formik>
  );
};
