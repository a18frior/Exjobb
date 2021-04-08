import React from 'react';
import './Maincolumn.css';

export default class Main extends React.Component {
 

  render() {
    return <div><slot></slot></div>;
  }
}


