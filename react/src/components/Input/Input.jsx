import React from 'react';
import './Input.css';

export default class Input extends React.Component {
   setName= useState('');
    inputValue;
    inputValue2;
    inputValue3;
    inputValue4;
    inputValue5;
    valueMessage;
    valueMessage2;
    valueMessage3;
    valueMessage4;
    valueMessage5;
    greenMode;
    redMode;
  
  
  
   validateP(e){
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
  
  

  
  validateE(e){
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
   validateA(e){
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
  
   validateN(e){
    this.inputValue3 = e.srcElement.value
   if(this.inputValue.length> 3){
    const re = /^([A-Z][a-zA-Z]*)/;
    re.test(this.inputValue3);
    if (re.test(this.inputValue3)==false){
      
      this.valueMessage3="godkänt namn";
      this.update(this.valueMessage3)
      setName(e);
      
    }
    else{ 
      this.valueMessage3="Bara bokstäver";
      this.update(this.valueMessage3)
    }
   }}

   validateS(e){
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
    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        name: this.setName
      }
    }));
  
  }


    render() {
    return <div> <input type="text" label="Email"  name="email" oninput= {event => validateE(event.target.value)} />Email: <p>${this.valueMessage}</p>
    <input type="text" label="Password"  name="password" oninput={event => validateP(event.target.value)} />Password
    <p>${this.valueMessage2}</p>
    <input type="text" label="Name" name="name" oninput={event => validateN(event.target.value)} />Name:
    <p>${this.valueMessage3}</p>
    <input type="text" label="Surname" name="surname" oninput={event => validateS(event.target.value)}  />Surname 
    <p>${this.valueMessage4}</p>
    <input type="Date" label="Age" name="age" oninput={event => validateA(event.target.value)} /> Date of birth:
    <p>${this.valueMessage5}</p>
    <frida-button onclick={this.submit.bind(this)}></frida-button></div>

  }
  }

  
