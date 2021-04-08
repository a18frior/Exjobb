import React from 'react';
import './Search.css';

export default class Form extends React.Component {
 

  render() {
    return <div><input/> <button onclick={this.onClick.bind(this)}>Search</button></div>;
  }

  onClick() {
    this.dispatchEvent(new CustomEvent('search', {
      detail: {
        search: (this.querySelector('input')).value
      }
    }));
  }

}




  


