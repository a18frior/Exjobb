import { LitElement, html, customElement } from 'lit-element';
import './components/Button';
import './components/Form';

@customElement('frida-app')
export class App extends LitElement {

  render() {
    return html`
        <style>
            frida-button {
                margin: 1rem;
                
            }
           
        </style>
        <frida-button .label="${'Click on me!'}"></frida-button>
        <frida-form .input="${'skriv'}"></frida-form>

    `;
  }
}