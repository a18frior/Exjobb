import { LitElement, html, customElement } from 'lit-element';
import * as FreeGrammar from '../libs/FreeGrammar';
import * as Heading from './Heading';

@customElement('frida-post')
export class div extends LitElement {
  random:any;
  sentence:any;
  sentences: Array<1000>;
  headingShow:any;
  sentenceShow:any;
 
   static get properties() {
    return {
       
        sentences: {type:Array}
    };
    }
    constructor() {
      super();
      this.sentences = [];
      this.createSentence(); 
      
  }

    createSentence() {

        for (let index = 0; index < 1000; index++) {
           this.random=FreeGrammar.getRandomInt(3,20);
           for (let index = 0; index < this.random; index++) {
            this.sentence = FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
            
             this.sentences.push(this.sentence);   
         }
        }
  }

 export function showPost(idx){

    this.headingShow= Heading.this.headings[idx];
    this.sentenceShow= this.sentences[idx];

    
  

  }

 
    
  render() {
  
    return   html`<style>div{margin:5px; padding: 20px;}</style><div><div>${this.headingShow}</div><div>${this.sentenceShow}</div></div>`; 
  
  
 
  }}