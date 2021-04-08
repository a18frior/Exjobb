import React from 'react';
import './Sidecolumn.css';

export default class Side extends React.Component {
 

    Name = (name)=>{
        name=this.name;
    }

  render() {
    return  <div>
    ${this.name}
<slot></slot></div>
  }
}

