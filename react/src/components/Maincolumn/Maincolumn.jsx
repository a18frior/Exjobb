import React from 'react';
import './Maincolumn.css';
import PropTypes from 'prop-types';

export default class Maincolumn extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
      };
 
  render() {
    
    return <div>{this.props.children}</div>;
  }
}


