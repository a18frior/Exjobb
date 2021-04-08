import React from 'react';
import FreeGrammar from './libs/FreeGrammar';
import './Post';

export default class getPosts extends React.Component {
  getPosts(){
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
  for (let index = 0; index < 1000; index++) {
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
    newPosts.push(Post.Post={
      heading =headings[index],
      sentance=sentences[index]
    }
    )
  
  window.sessionStorage.setItem('posts', JSON.stringify(newPosts));
  return newPosts;

  
}}}
