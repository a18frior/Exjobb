import { LitElement, html, customElement } from 'lit-element';
import * as FreeGrammar from '../libs/FreeGrammar';
import * Sentence from './Sentence';

@customElement('frida-heading')
export class div extends LitElement {
  random:any;
  heading: any ;
  headings:Array<1000>;

   static get properties() {
    return {
        headings: {type: Array};
        
        
    };
    }
    constructor() {
      super();
      this.headings = [];
      this.createHeading();
      
          
  }

    createHeading() {

        
        for (let index = 0; index < 1000; index++) {
            this.random=  FreeGrammar.getRandomInt(1,4);
           for (let index = 0; index < this.random; index++) {
              this.heading = FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
              this.headings.push(this.heading);
              
           }   
        }
  }
 
  render() {
    return   html`<style>div{margin:5px; padding: 20px;}</style><ul>${this.headings.map((item,idx) => html`<div ><li>${item}</li></div>`)}</ul>` 
}}
