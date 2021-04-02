import { LitElement, html, customElement } from 'lit-element';
import * as FreeGrammar from '../libs/FreeGrammar';

@customElement('frida-post')
export class div extends LitElement {
  random2:any;
  random:any;
  sentence:any;
  heading: any ;
  headings:Array<1000>;
  sentences: Array<1000>;
  RandomInt:any;
  genSent:any;
  
 

   static get properties() {
    return {
        headings: {type: Array},
        sentences: {type:Array}
    };
    }
    constructor() {
      super();
      this.headings = [];
      this.sentences = [];
      this.Post();
   
     
      
  }

    Post() {

        
        for (let index = 0; index < 1000; index++) {
            this.random=  FreeGrammar.getRandomInt(1,4);
           for (let index = 0; index < this.random; index++) {
              this.heading = FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
              this.headings.push(this.heading);
              
           }
        
           this.random2=FreeGrammar.getRandomInt(3,20);
           for (let index = 0; index < this.random2; index++) {
            this.sentence = FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
            
             this.sentences.push(this.sentence);
            
         }
         
        }
  }
    
  render() {
    return  html`<ul>${this.headings.map(item => html`<li>${item}</li>`)}</ul>`;
  }
}
           
           
        

         

  