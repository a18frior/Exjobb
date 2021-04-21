import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export default class Form extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
  };



  render() {
    return <div className="form">{this.props.children}</div>;
  }
}