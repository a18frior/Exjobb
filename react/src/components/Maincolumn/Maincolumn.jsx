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
    let mainStyle={
      width:"70%",
      marginTop:"50px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems: "center"
    }
    
    return <div id="main" style={mainStyle}>{this.props.children}</div>;
  }
}


