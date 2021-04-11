import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default class Input extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func   
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
    greenMode = false;
    redMode = false;
    

    constructor(){
        super();
            this.state = {
                email: "Email",
                password:"Password",
                age: "" ,
                name: "Name",
                surname: "Surname"
            };
            this.onInputchange = this.onInputchange.bind(this);
            this.validateE= this.validateE.bind(this);
            this.validateP= this.validateP.bind(this);
            this.validateN= this.validateN.bind(this);
            this.validateS= this.validateS.bind(this);
            this.validateA= this.validateA.bind(this);
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        
      }
  
  
  


    render() {
        const {items}=this.state
    return <div> <input type="text" label="Email"  name="email" value={this.state.email} onChange={this.onInputchange} onInput={this.validateE} /> <p>{this.valueMessage}</p>
    <input type="text" label="Password"  name="password" value={this.state.password} onChange={this.onInputchange} onInput={this.validateP} />
    <p>{this.valueMessage2}</p>
    <input type="text" label="Name" name="name" value={this.state.name} onChange={this.onInputchange}  onInput={event=> this.validateN} />
    <p>{this.valueMessage3}</p>
    <input type="text" label="Surname" name="surname" value={this.state.surname} onChange={this.onInputchange} onInput={this.validateS}  />
    <p>{this.valueMessage4}</p>
    <input type="Date" label="Age" name="age" value={this.state.age} onChange={this.onInputchange}  onInput={this.validateA} /> 
    <p>{this.valueMessage5}</p>
    <button onClick={this.submit.bind(this)}>Submit</button></div>

  }
  validateP(){
    this.inputValue2 = this.state.password;
   if(this.inputValue2.length> 6){
    this.greenMode=true;
       this.redMode=false; 
      
   }
      
    else{
      this.valueMessage2="lösenord ska vara minst 6";
      this.greenMode=false;
      this.redMode=true;
    }
   }
  

  validateE(){
    this.inputValue =this.state.email;
    console.log(this.state.email);
    console.log(this.inputValue);
   if(this.inputValue.length> 15){
    const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    re.test(this.inputValue);
    if (re.test(this.inputValue)==true){
    
       this.greenMode=true;
       this.redMode=false;  
    }
    else{ 
      this.valueMessage="Exempel: email@email.com";
      this.greenMode=false;
      this.redMode=true;
      
     
      
    }
   }
  }
   validateA(){
    this.inputValue5 = this.state.age;


    const inputDate = new Date(this.inputValue5);
    const todayDate = new Date();
    const max_Date= new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
  
   if(max_Date.getTime() > inputDate.getTime()){
    this.greenMode=true;
        this.redMode=false;
      
      
    }
    else{ 
      this.valueMessage5="Måste vara över 18";
      this.greenMode=false;
        this.redMode=true;
     
    }
   }
  
   validateN(){
    this.inputValue3 = this.state.name;
   if(this.inputValue.length> 3){
    const re = /^([A-Z][a-zA-Z]*)/;
    re.test(this.inputValue3);
    if (re.test(this.inputValue3)==false){
        this.greenMode=true;
        this.redMode=false;
     
      this.name = this.inputValue3;
      
    }
    else{ 
      this.valueMessage3="Bara bokstäver";
      this.greenMode=false;
        this.redMode=true;
    }
   }}

   validateS(){
    this.inputValue4 = this.state.surname;
   if(this.inputValue4.length> 3){
    const re = /^([A-Z][a-zA-Z]*)/;
    re.test(this.inputValue4);
    if (re.test(this.inputValue4)==false){
        this.greenMode=true;
        this.redMode=false;
    
    }
    else{  
        this.greenMode=false;
        this.redMode=true;

      this.valueMessage4="Bara bokstäver";
      
    }
   }
  }
  submit(){
      if(this.greenMode && !this.redMode) {
        this.props.onSubmit({ 
            name: this.state.name
        })
      }
  }
  }

  
