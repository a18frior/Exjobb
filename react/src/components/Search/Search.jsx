import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends React.Component {
    
    static propTypes = {
        onSearch: PropTypes.func
    }

    search = null;

  render() {
    return <div><input onChange={(event) => this.search = event.target.value}/><button onClick={() => this.props.onSearch({ search: this.search })}>Search</button></div>;
  }
}




  


