import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Input.css';

export default class Input extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,   
    }
  
   
    name = null;
    inputValue= null;
    inputValue2= null;
    inputValue3 = null;
    inputValue4= null;
    inputValue5= null;
    valueMessage= null;
    valueMessage2 =null;
    valueMessage3= null;
    valueMessage4 = null;
    valueMessage5= null;
    valueMessage6= null;
    colorMode= "black";
    colorMode2= "black";
    colorMode3= "black";
    colorMode4= "black";
    colorMode5= "black";
    display= "hidden";
    display2= "hidden";
    display3= "hidden";
    display4= "hidden";
    display5= "hidden";
    display6= "hidden";
    
    
    
    
           /* this.validateE= this.validateE.bind(this);
            this.validateP= this.validateP.bind(this);
            this.validateN= this.validateN.bind(this);
            this.validateS= this.validateS.bind(this);
            this.validateA= this.validateA.bind(this);
            this.onInputchange=this.onInputchange.bind(this);*/
            
            
    
  
  


    render() {
      let divStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }
    
      console.log('render');
    
    return <div style={divStyle}> Email: <input id="email" style={{borderColor:this.colorMode}} type="text" label="Email"  name="email"  onChange={(event) => { this.validateE(event);}}/> 
    <p style={{visibility:this.display}}>{this.valueMessage}</p>
    Password: <input id="password" style={{borderColor:this.colorMode2}} type="text" label="Password"  name="password"  onChange={(event) => { this.validateP(event);}}/>
    <p style={{visibility:this.display2}}>{this.valueMessage2}</p>
    Name: <input id="name" style={{borderColor:this.colorMode3}} type="text" label="Name" name="name"  onChange={(event) => { this.validateN(event);}} />
    <p style={{visibility:this.display3}}>{this.valueMessage3}</p>
    Surname: <input id="surname" style={{borderColor:this.colorMode4}}  type="text" label="Surname" name="surname" onChange={(event) => { this.validateS(event);}}/>
    <p style={{visibility:this.display4}}>{this.valueMessage4}</p>
    Date of birth: <input id="age" style={{borderColor:this.colorMode5}} type="Date" label="Age" name="age"  onChange={(event) => { this.validateA(event);}} /> 
    <p style={{visibility:this.display5}}>{this.valueMessage5}</p>
    <button id="submitForm" onClick={this.submit.bind(this)}>Submit</button>
    <p style={{visibility:this.display6}}>{this.valueMessage6}</p></div>
  }

validateP(event){
    this.inputValue2 = event.target.value;
   if(this.inputValue2.length> 6){
    
    this.colorMode2="green";
    this.display2="hidden";
    this.forceUpdate();
   
      
   }
      
    else{
        
      this.valueMessage2="lösenord ska vara minst 6";
      this.colorMode2="red";
      this.display2= "visible";
      this.forceUpdate();
    }
   }
  

  validateE(event){

    this.inputValue = event.target.value;
    if(this.inputValue.length> 15){
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    re.test(this.inputValue);
    if (re.test(this.inputValue)===false){
      this.colorMode="red";
        this.display= "visible";
      this.valueMessage="Exempel: email@email.com";
      this.forceUpdate();
     
    } 
      else{
        this.colorMode="green";
        this.display="hidden";
        this.forceUpdate();
       
    }
    
  }}

   validateA(event){
    this.inputValue5 = event.target.value;
    const inputDate = new Date(this.inputValue5);
    const todayDate = new Date();
    const max_Date= new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
  
   if(max_Date.getTime() > inputDate.getTime()){
    
    this.colorMode5="green";
    this.display5="hidden";
    this.forceUpdate();
      
    }
    else{ 
        this.colorMode5="red";
        this.display5= "visible";
      this.valueMessage5="Måste vara över 18";
      this.forceUpdate();
      
    }
   }
  
   validateN(event){
    this.inputValue3 = event.target.value;
    if(this.inputValue3.length> 3){
    const re = /^([A-Z][a-zA-Z]*)/;
    re.test(this.inputValue3);
    if (re.test(this.inputValue3)==true){
       
        this.colorMode3="green";
        this.display3="hidden";
        this.forceUpdate();     
      this.name = this.inputValue3;
      
    }
    else{ 
      this.valueMessage3="Bara bokstäver";
      this.colorMode3="red";
      this.display3= "visible";
      this.forceUpdate();
    }
   }}

   validateS(event){
    this.inputValue4 =event.target.value;
    if(this.inputValue4.length> 3){
    const re = /^([A-Z][a-zA-Z]*)/;
    re.test(this.inputValue4);
    if (re.test(this.inputValue4)==true){
        this.colorMode4="green";
        this.display4="hidden";
        this.forceUpdate();
    
    }
    else{  
        this.valueMessage4="Bara bokstäver";
        this.colorMode4="red";
        this.display4= "visible";

      this.valueMessage4="Bara bokstäver";
      
    }
   }}
  
  submit(){
      if(this.colorMode==="green" && this.colorMode2==="green" && this.colorMode3==="green" && this.colorMode4==="green" && this.colorMode5==="green" ) {
        this.display6= "hidden";
        this.props.onSubmit({ 
           
        })
      }
      else { this.display6= "visible";

      this.valueMessage6="Något är fel i formuläret";}
  }

}
  

 

  
