import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  props = {
    label: null,
    onFridaClick: null
  };

  render() {
    return <button className="button" onClick={() => this.props.onFridaClick()}>{this.props.label}</button>;
  }
}