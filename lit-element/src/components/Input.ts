import { LitElement, html, customElement} from 'lit-element';
import './Button';
@customElement('frida-input')
export class Input extends LitElement {
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
  greenMode: boolean;
  redMode: boolean;



 constructor() {
   super();
   this.greenMode=false;
   this.redMode=false;
  }


     render() {
    return html`
        <style>
            input{margin-top:10px;}
            :host([greenMode]) .input{
              border:1px,solid, green;
            }

            :host([redMode]) .input{
              border:1px,solid, red;
            }
            

            
        </style>
      <input type="text" label="Email"  name="email" @input="${this.validateE}" />Email:
      <p>${this.valueMessage}</p>
      <input type="text" label="Password"  name="password" @input="${this.validateP}"  />Password
      <p>${this.valueMessage2}</p>
      <input type="text" label="Name" name="name" @input="${this.validateN}" />Name:
      <p>${this.valueMessage3}</p>
      <input type="text" label="Surname" name="surname" @input="${this.validateS}"  />Surname 
      <p>${this.valueMessage4}</p>
      <input type="Date" label="Age" name="age" @input="${this.validateA}"  /> Date of birth:
      <p>${this.valueMessage5}</p>
      <frida-button @click="${this.submit}" this.label="Klicka"></frida-button>
      

  
    `;
 
   
    
      
    }
    validateP(e: { srcElement: { value: string; }; }){
      this.inputValue2 = e.srcElement.value
     if(this.inputValue2.length> 6){
      
        
        this.valueMessage2="Godkänt lösenord";
        this.update(this.valueMessage2)
     }
        
      else{
        this.valueMessage2="lösenord ska vara minst 6";
        this.update(this.valueMessage2)
      }
     }
    
    

    
    validateE(e: { srcElement: { value: string; }; }){
      this.inputValue = e.srcElement.value
     if(this.inputValue.length> 15){
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      re.test(this.inputValue);
      if (re.test(this.inputValue)==true){
      
         this.greenMode=true;
         this.redMode=false;

         console.log(this.greenMode);
         
        
         
         
      }
      else{ 
        this.valueMessage="Exempel: email@email.com";
        this.greenMode=false;
        this.redMode=true;
        this.update(this.valueMessage)
        console.log(this.greenMode);
        
      }
     }
    }
     validateA(e: { srcElement: { value: string; }; }){
      this.inputValue5 = e.srcElement.value


      const inputDate = new Date(this.inputValue5);
      const todayDate = new Date();
      const max_Date= new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
    
     if(max_Date.getTime() > inputDate.getTime()){
      
        
        this.valueMessage5="Godkänd ålder";
        this.update(this.valueMessage5)
      }
      else{ 
        this.valueMessage5="Måste vara över 18";
        this.update(this.valueMessage5)
      }
     }
    
     validateN(e: { srcElement: { value: string; }; }){
      this.inputValue3 = e.srcElement.value
     if(this.inputValue.length> 3){
      const re = /^([A-Z][a-zA-Z]*)/;
      re.test(this.inputValue3);
      if (re.test(this.inputValue3)==false){
        
        this.valueMessage3="godkänt namn";
        this.update(this.valueMessage3)
      }
      else{ 
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
        
        this.valueMessage4="Godkänt namn";
        this.update(this.valueMessage4)
      }
      else{ 
        this.valueMessage4="Bara bokstäver";
        this.update(this.valueMessage4)
      }
     }
    }
    submit(){
      if(this.greenMode==true){
        alert("du är bäst")
      }
  
      else{
        alert("något är fel")
      }
    
    }
  
  }
      
      
  

  