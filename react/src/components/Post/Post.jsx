import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

  
export default class Post extends React.Component {

    static propTypes = {
        post: PropTypes.object
    };

  render() {
    return <div><h3>{this.props.post?.heading}</h3><p>{this.props.post?.sentence}</p></div>;
  }
} 

