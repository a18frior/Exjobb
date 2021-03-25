import { LitElement, html, customElement } from 'lit-element';


@customElement('frida-form')
export class Form extends LitElement {
  

  render() {
    return html`
        <style>
            :host {
                display:flex;
                flex-direction: column;
                padding:30px;
                width:450px;
                background-color:lightblue;
                align-items:flex-start;

            }
            
             
        </style>
        <form><slot></slot></form>
    `;}
    

}
