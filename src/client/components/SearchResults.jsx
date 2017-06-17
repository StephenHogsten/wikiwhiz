import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const SingleResult = (props) => (
  <div 
    className='one-result'
    onClick={() => {
      window.open(props.link)
    }}
  >
    <h2 className='one-result-title'>{props.title}</h2>
    <p className='one-result-text'>{props.description}</p>
  </div>
);
SingleResult.PropTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

const SearchResults = (props) => {
  let arr = props.wikiArr.map((x) => (
    <SingleResult
      key={x.link}
      link={x.link}
      title={x.title}
      description={x.description}
    />
  ));
  return (
    <div className='search-results'>
      {arr.length > 0? arr: null}
    </div>
  );
}
SearchResults.PropTypes = {
  wikiArr: PropTypes.array
}

function mapStateToProps(state) {
  return {
    wikiArr: state.searchArray
  }
}
export default connect(
  mapStateToProps 
)(SearchResults);