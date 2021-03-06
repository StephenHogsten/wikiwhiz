import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {REQUESTED, newSearch} from '../actions';

const SearchBar = (props) => (
  <div className='search-bar'>
    <input 
      id='search-text' 
      placeholder='search terms'
      onKeyDown={(event) => {
        if (event.keyCode == 13) {
          props.onClickSearch(event.target.value)
        }
      }}
    />
    <button 
      type='button' 
      className={props.searchStatus==REQUESTED? 'search-btn-fetching': 'search-btn'}
      onClick={() => {
        props.onClickSearch(document.querySelector('#search-text').value)
      }}
    >Search</button>
  </div>
);

SearchBar.PropTypes = {
  onClickSearch: PropTypes.func.isRequired,
  searchStatus: PropTypes.func.string
}

// redux 
export default connect(
  (state) => {
    return {
      searchStatus: state.searchStatus
    }
  },
  (dispatch) => {
    return {
      onClickSearch: (text) => dispatch(newSearch(text))
    }
  }
)(SearchBar);