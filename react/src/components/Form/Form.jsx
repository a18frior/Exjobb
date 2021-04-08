import React from 'react';
import './Form.css';

export default class Form extends React.Component {
 

  render() {
    return <form><slot></slot></form>;
  }
}





  
