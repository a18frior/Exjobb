import { LitElement, html, customElement } from 'lit-element';
import './components/Button';
import './components/Input'; 
import './components/Form';
import './components/Sidecolumns'; 
import './components/mainColumn'; 
import './components/Post';


@customElement('frida-app')
export class App extends LitElement {
 

  render() {
    {
      return html`
      <style>
          frida-button {
              margin: 1rem;
          }
          :host{width:100%;
          display: flex;
          flex-direction:block;}
               </style>
          
      
      <side-column></side-column>
      <main-column>
      <frida-form>
      <frida-input></frida-input>
      </frida-form>
      </main-column>
      <side-column></side-column>
      
      <side-column></side-column>
      <main-column>
       <frida-post></frida-post>
      </main-column>
      <side-column></side-column>
      
  `;  
    }
            
    
  }
}