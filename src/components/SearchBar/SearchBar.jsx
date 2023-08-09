import { useState } from "react";
import PropTypes from 'prop-types';

  const initialState= {
    searchValue:'',
  } 

export const SearchBar = ({ onSubmit }) => {
const[formData,setFormData]=useState(initialState);
  
  const onHandleSubmit=e=>{
e.preventDefault();
 onSubmit(formData.searchValue);
 setFormData({searchValue:''})
    }
  
  return (
      <div>
        <form onSubmit={onHandleSubmit}>
      <input
          type="text"
          name='searchValue'
          value={formData.searchValue}
          onChange={({ target: { value, name } }) => {
            setFormData({ ...formData, [name]: value })}}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" >
          <span>Search</span>
        </button>
       </form>
      </div>
    );
  };

  SearchBar.propTypes={
    onSubmit: PropTypes.func.isRequired,
  }