import React from 'react';
import './Post.css';

  
export default class Post extends React.Component {

    Post = (heading,sentence)=>{
        this.heading=heading;
        this.sentance=sentence;
    }
     
   
  
 

  render() {
    <div><h3>${this.Post.heading}</h3><p>${this.Post.sentence}</p></div>
  }
} 

