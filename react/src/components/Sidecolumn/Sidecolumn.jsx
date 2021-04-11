import React from 'react';
import PropTypes from 'prop-types';
import './Sidecolumn.css';

export default class Sidecolumn extends React.Component {
   
 
    static propTypes = {
        
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

  render() {
    
    return <div>{this.props.children}
      
        </div>
  }
}

