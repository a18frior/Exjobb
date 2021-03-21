import { LitElement, html, customElement } from 'lit-element';
import './components/Button';
import './components/Form';

@customElement('frida-app')
export class App extends LitElement {
  private buttonClickCount = 0;
  private view = 'home';

  render() {
    if(this.view === 'home') {
      return html`
      <style>
          frida-button {
              margin: 1rem;
              
          }
         
      </style>
      <frida-form .input="${'skriv'}">
        <frida-button
          @fridasClick="${() => {
                this.buttonClickCount++;
                this.view = 'other';
                this.requestUpdate();
        }}"
          .label="${'Click on me!'}">
        </frida-button>
          ${this.buttonClickCount}
      </frida-form>
  `;  
    }
    //             @fridasClick="${(event: CustomEvent) => console.log(event.detail.message)}"
    return html`
        <style>
            :host {
                margin: 10rem;
                background: green;
                
            }
           
        </style>
          <frida-button
            @fridasClick="${() => this.buttonClickCount++ && this.requestUpdate()}"
            .label="${'Click on me!'}">
          </frida-button>
            ${this.buttonClickCount}
    `;
  }
}