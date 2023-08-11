import { useState } from 'react';
import PropTypes from 'prop-types';
import {Div,Form,Button,Input} from './SearchBar.styled';

const initialState = {
  searchValue: '',
};

export const SearchBar = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState);

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(formData.searchValue);
    setFormData({ searchValue: '' });
  };

  return (
    <Div>
      <Form onSubmit={onHandleSubmit}>
    <Input
          type="text"
          name="searchValue"
          value={formData.searchValue}
          onChange={({ target: { value, name } }) => {
          setFormData({ ...formData, [name]: value });
          }}
          autoComplete="off"
          autoFocus
          required
          placeholder=" Search movie"
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
    </Div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
