import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Input from "./components/input/Input";
import Form from"./components/form/Form";
import Sidecolumn from"./components/sidecolumn/Sidecolumn";
import Post from"./components/post/Post";
import Search from"./components/search/Search";
import * as FreeGrammar from "./libs/FreeGrammar";
import Maincolumn from './components/Maincolumn/Maincolumn';
import "./components/App.css"
export default class App extends React.Component {
    state = {
        page: null,
        search: null,
        inputForm: {
            name: null
        },
    };

    render() {
      
      let style={
        width: "100%",
        display:"flex",
        flexDirection: "row"
      }
      
        if (this.state.page === "post") {
            const postObjects = this.getPosts();
            const posts = [];
            for(let i = 0; i < postObjects.length; i++) {
                if (!this.state.search || postObjects[i].heading.includes(this.state.search) || postObjects[i].sentence.includes(this.state.search)) {
                    posts.push(<Post key={i} post={postObjects[i]}/>);
                  }
            }
         return(
           <div id="content" style={style}><Search onSearch={(event) => {
                this.state.search = event.search;
                this.forceUpdate();
           }} value={this.state.search}></Search>
              <Sidecolumn  ></Sidecolumn>
              <Maincolumn> {posts} </Maincolumn>
              <Sidecolumn></Sidecolumn></div>);
        }
             
          
        return (
            <div id="content" style={style}>
            <Sidecolumn></Sidecolumn>
            <Maincolumn>
              <Form>
                <Input onSubmit={(name) => {
                this.state.page="post";
                this.state.inputForm.name = name;
                this.forceUpdate();
              }}
                ></Input>
             </Form>
            </Maincolumn>
            <Sidecolumn></Sidecolumn></div>);
        
    }

       getPosts() {
        
    
        const posts = window.sessionStorage.getItem("posts");
        if (posts) {
          return JSON.parse(posts);
        }
        let random = null;
        let random2 = null;
        let heading = null;
        let sentence = null;
        let paragraf = null;
        const headings = [];
        const sentences = [];
        for (let index = 0; index < 2000; index++) {
          random = FreeGrammar.getRandomInt(1, 4);
          for (let index = 0; index < random; index++) {
            heading = FreeGrammar.generate_sentence(
              0.5,
              0.5,
              0.5,
              0.5,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            );
            headings.push(heading);
    
            random2 = FreeGrammar.getRandomInt(3, 20);
    
            for (let index = 0; index < random2; index++) {
              sentence = FreeGrammar.generate_sentence(
                0.5,
                0.5,
                0.5,
                0.5,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              );
    
              if (index <= 1) {
                paragraf = sentence;
              }
              if (index > 1) {
                paragraf += sentence;
              }
    
              if (index % 12 === 0) {
                sentences.push(paragraf);
                paragraf = "";
              }
            }
          }
        }
        const newPosts = [];
        for (let index=0; index<headings.length; index++){
          newPosts.push({
            heading: headings[index],
            sentence: sentences[index]
          });
        }
        window.sessionStorage.setItem('posts', JSON.stringify(newPosts));
        return newPosts;
      }
}


ReactDOM.render(<App/>, document.getElementById('app'));