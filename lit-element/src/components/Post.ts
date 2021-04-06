import { LitElement, html, customElement } from 'lit-element';
import * as FreeGrammar from '../libs/FreeGrammar';

@customElement('frida-post')
export class div extends LitElement {
  random:any;
  heading: any ;
  headings:Array<1000>;
  random2:any;
  sentence:any;
  sentences: any;
  post:any;
  paragraf:any;
  
  
 
  

    constructor() {
      super();
      this.headings = [];
      this.sentences=[];
      this.createPost();
      this.post=[];
      this.paragraf="";
   
      
      
          
  }

    createPost() {

        
        for (let index = 0; index < 1000; index++) {
            this.random=  FreeGrammar.getRandomInt(1,4);
           for (let index = 0; index < this.random; index++) {
              this.heading = FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null);
              this.headings.push(this.heading);

             
                 this.random2= FreeGrammar.getRandomInt(3,20);
            
                 for (let index = 0; index < this.random2; index++) {
                  this.sentence =(FreeGrammar.generate_sentence(0.5,0.5,0.5,0.5,null,null,null,null,null,null,null));
                 
                  if(index<=1){
                  this.paragraf=this.sentence;
                  }
                  if(index>1){
                    this.paragraf+=this.sentence;
                  }

                  if(index%10===0){
                    this.sentences.push(this.paragraf);
                    this.paragraf='';
                  }
               
                console.log(this.paragraf);
                 
            
              
          
       }  }}}
            
         
    
  
 
           render() {
            
            for (let index=0; index<this.headings.length; index++){
            this.post.push(html`<h3>${this.headings[index]}</h3><p>${this.sentences[index]}</p>`);
            
        }
            return html` <ul>${this.post.map(((item: unknown) => html`<li>${item}</li>`))}</ul>`
        }}