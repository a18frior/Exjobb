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
    
    let sideStyle={
      width:"15%",
      marginTop:"50px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems: "center"
    }
    return <div id="side" style={sideStyle}>{this.props.children}
      
        </div>
  }
}

