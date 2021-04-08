import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Input from "./components/Input";
import Form from"./components/Form";
import Side from"./components/Sidecolumn";
import Main from "./components/Maincolumn";
import Post from"./components/Post";
import Search from"./components/Search";
import getPost from "./components/getPost"

post = (heading,sentence)=>{
    this.heading=heading;
    this.sentence=sentence;
}

 State= (page,search,inputForm)=>{
    this.page=page
    this.search=search
    this.inputForm=inputForm} 

    State.page=null;
    State.search=null;
    State.inputForm=(name)=>{
        this.name=name
    }
    if (this.State.page === "post") {
        const posts = [];
        for (const post of getPost.getPost()) {
          if (!this.state.search || post.heading.includes(this.state.search) || post.sentance.includes(this.state.search)) {
            posts.push(<Post>{Post=post}</Post>);
          }
        }
    ReactDOM.render(
       <div><Search search={(event) =>{State.search = event.detail.search;
              this.requestUpdate();}}></Search>
          <Side></Side>
          <Main> {posts} </Main>
          <Side></Side></div> ,document.getElementById('app')); npm
    }
     
  
ReactDOM.render(
    <div>
    <Side></Side>
    <Main>
      <Form>
        <Input
          onsubmit={(event) => {
            this.State.page = "post";
            this.State.inputForm.name = event.detail.email;
            this.requestUpdate();
          }}
        ></Input>
      </Form>
    </Main>
    <Side></Side></div> ,document.getElementById('app')); npm
