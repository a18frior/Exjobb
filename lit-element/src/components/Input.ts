import { LitElement, html, css,customElement} from 'lit-element';

@customElement('frida-input')
export class Input extends LitElement {
  static get properties() {
    return {
      greenMode: {
        type: Boolean,
        reflect: true,
      },
      redMode: {
        type: Boolean,
        reflect: true,
      },
      display: {
        type: Boolean,
        reflect: true,
      },
      greenMode2: {
        type: Boolean,
        reflect: true,
      },
      redMode2: {
        type: Boolean,
        reflect: true,
      },
      display2: {
        type: Boolean,
        reflect: true,
      },
      greenMode3: {
        type: Boolean,
        reflect: true,
      },
      redMode3: {
        type: Boolean,
        reflect: true,
      },
      display3: {
        type: Boolean,
        reflect: true,
      },
      greenMode4: {
        type: Boolean,
        reflect: true,
      },
      redMode4: {
        type: Boolean,
        reflect: true,
      },
      display4: {
        type: Boolean,
        reflect: true,
      },
      greenMode5: {
        type: Boolean,
        reflect: true,
      },
      redMode5: {
        type: Boolean,
        reflect: true,
      },
      display5: {
        type: Boolean,
        reflect: true,
      },
      display6: {
        type: Boolean,
        reflect: true,
      },
      value:{type:String,
            reflect:true}
    };
  }
  public static styles = css`
  button{background-color:white; padding:5px; }
  input {margin-top:10px;
        border-width:2px;
        border style:solid;
        border-color:black;
  }

  input[greenMode] {
    border-width:2px;
        border style:solid;
        border-color:green;
  }
  
  
  input[redMode] {
    border-width:2px;
        border style:solid;
        border-color:red;
  }

  input[greenMode2] {
    border-width:2px;
        border style:solid;
        border-color:green;
  }
  
  
  input[redMode2] {
    border-width:2px;
        border style:solid;
        border-color:red;
  }
  input[greenMode3] {
    border-width:2px;
        border style:solid;
        border-color:green;
  }
  
  
  input[redMode3] {
    border-width:2px;
        border style:solid;
        border-color:red;
  }
  input[greenMode4] {
    border-width:2px;
        border style:solid;
        border-color:green;
  }
  
  input[redMode4] {
    border-width:2px;
        border style:solid;
        border-color:red;
  }
  input[greenMode5] {
    border-width:2px;
        border style:solid;
        border-color:green;
  }
  input[redMode5] {
    border-width:2px;
        border style:solid;
        border-color:red;
  }

  p {visibility: hidden;}

  p[display] {visibility: visible;}
  p[display2] {visibility: visible;}
  p[display3] {visibility: visible;}
  p[display4] {visibility: visible;}
  p[display5] {visibility: visible;}
  p[display6] {visibility: visible;}

            
`;
  inputValue:any;
  inputValue2:any;
  inputValue3:any;
  inputValue4:any;
  inputValue5:any;
  valueMessage: any;
  valueMessage2: any;
  valueMessage3: any;
  valueMessage4: any;
  valueMessage5: any;
  valueMessage6: any;
  greenMode: boolean;
  redMode: boolean;
  display:boolean;
  greenMode2: boolean;
  redMode2: boolean;
  display2:boolean;
  greenMode3: boolean;
  redMode3: boolean;
  display3:boolean;
  greenMode4: boolean;
  redMode4: boolean;
  display4:boolean;
  greenMode5: boolean;
  redMode5: boolean;
  display5:boolean;
  display6:boolean;





 constructor() {
   super();
   this.greenMode=false;
   this.redMode=false;
   this.display=false;
   this.greenMode2=false;
   this.redMode2=false;
   this.display2=false;
   this.greenMode3=false;
   this.redMode3=false;
   this.display3=false;
   this.greenMode4=false;
   this.redMode4=false;
   this.display4=false;
   this.greenMode5=false;
   this.redMode5=false;
   this.display5=false;
   this.display6=false;
  }

     render() {
    return html`
     
      Email: <input ?greenMode=${this.greenMode} ?redMode=${this.redMode} id="email" type="text" label="Email"  name="email" @change="${this.validateE}" />
      <p ?display=${this.display}>${this.valueMessage}</p>
      Password: <input ?greenMode2=${this.greenMode2} ?redMode2=${this.redMode2} id="password" type="text" label="Password"  name="password" @change="${this.validateP}"  />
      <p ?display2=${this.display2} >${this.valueMessage2}</p>
      Name: <input ?greenMode3=${this.greenMode3} ?redMode3=${this.redMode3} id="name" type="text" label="Name" name="name" @change="${this.validateN}" />
      <p ?display3=${this.display3}>${this.valueMessage3}</p>
      Surname: <input ?greenMode4=${this.greenMode4} ?redMode4=${this.redMode4} id="surname" type="text" label="Surname" name="surname" @change="${this.validateS}"  />
      <p ?display4=${this.display4} >${this.valueMessage4}</p>
      Date of birth: <input ?greenMode5=${this.greenMode5} ?redMode5=${this.redMode5} id="age" type="Date" label="Age" name="age" @change="${this.validateA}"  /> 
      <p ?display5=${this.display5}>${this.valueMessage5}</p>
      <button id="submitForm" @click="${this.submit.bind(this)}">Submit</button> 
      <p ?display6=${this.display6}>${this.valueMessage6}</p>

  
    `;
   
    }
    validateP(e: { srcElement: { value: string; }; }){
      this.inputValue2 = e.srcElement.value;
     if(this.inputValue2.length> 6){
      this.display2=false;
      this.greenMode2=true;
      this.redMode2=false;
        
     }
        
      else{
        this.valueMessage2="lösenord ska vara minst 6";
        this.greenMode2=false;
        this.redMode2=true;
        this.display2=true;
        this.update(this.valueMessage2)
      }
     }
    
    

    
    validateE(e: { srcElement: { value: string; }; }){
      this.inputValue = e.srcElement.value
     if(this.inputValue.length> 15){
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      re.test(this.inputValue);
      if (re.test(this.inputValue)==true){
         this.display=false;
         this.greenMode=true;
         this.redMode=false;
      }
      else{ 
        this.valueMessage="Exempel: email@email.com";
        this.greenMode=false;
        this.redMode=true;
        this.display=true;
        this.update(this.valueMessage)
        
        
      }
     }
    }
     validateA(e: { srcElement: { value: string; }; }){
      this.inputValue5 = e.srcElement.value
      const inputDate = new Date(this.inputValue5);
      const todayDate = new Date();
      const max_Date= new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
    
     if(max_Date.getTime() > inputDate.getTime()){
      
      this.display5=false;
      this.greenMode5=true;
      this.redMode5=false;
        
      }
      else{ 
        this.valueMessage5="Måste vara över 18";
        this.greenMode5=false;
        this.redMode5=true;
        this.display5=true;
        this.update(this.valueMessage5)
      }
     }
    
     validateN(e: { srcElement: { value: string; }; }){
      this.inputValue3 = e.srcElement.value
     if(this.inputValue.length> 3){
      const re = /^([A-Z][a-zA-Z]*)/;
      re.test(this.inputValue3);
      if (re.test(this.inputValue3)==false){
        this.display3=false;
      this.greenMode3=true;
      this.redMode3=false;
      
        
      }
      else{ 
        this.greenMode3=false;
        this.redMode3=true;
        this.display3=true;
        this.valueMessage3="Bara bokstäver";
        this.update(this.valueMessage3)
      }
     }}

     validateS(e: { srcElement: { value: string; }; }){
      this.inputValue4 = e.srcElement.value
     if(this.inputValue4.length> 3){
      const re = /^([A-Z][a-zA-Z]*)/;
      re.test(this.inputValue4);
      if (re.test(this.inputValue4)==false){
       
        this.display4=false;
        this.greenMode4=true;
        this.redMode4=false;
      }
      else{ 
        this.greenMode4=false;
        this.redMode4=true;
        this.display4=true;
        this.valueMessage4="Bara bokstäver";
        this.update(this.valueMessage4)
      }
     }
    }
    submit(){
      if(this.greenMode===true && this.greenMode2===true && this.greenMode3===true && this.greenMode4===true &&this.greenMode5===true){
        this.display6=false; 
      this.dispatchEvent(new CustomEvent('submit', {
        detail: {
          email: (<HTMLInputElement>this.shadowRoot?.querySelector('input[name="name"]')).value
        },
      }));
    }
    else {
      this.display6=true;
      this.valueMessage6="Något är fel i formuläret";
      this.update(this.valueMessage6)
      }
    }
  }
      
      
  

  