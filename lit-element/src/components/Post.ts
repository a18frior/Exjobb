import { LitElement, html, customElement } from 'lit-element';
import './contextfreegrammar';




@customElement('frida-post')
export class div extends LitElement {
  random2:any;
  random:any;
  sentence:any;
  heading: any ;
  headings:Array<1000>
  sentences: Array<1000>
  
 

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
            this.random= getRandomInt(1,4);
           for (let index = 0; index < this.random.length; index++) {
              this.heading = generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
              this.headings.push(this.heading);
              console.log(this.heading, this.headings);
           }
        
           this.random2=getRandomInt(3,20)
           for (let index = 0; index < this.random2.length; index++) {
            this.sentence = generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
            
             this.sentences.push(this.sentence);
            
         }
         
        }
        
      
      
      
     
  }



    
  render() {
  
    return html`
     
     
        
       
       <ul>${this.headings.map(item => html`<li>${item}</li>`)}</ul>
           `;}
}
           
           
        

         

  