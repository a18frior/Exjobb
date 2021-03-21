import { LitElement, html, property, customElement } from 'lit-element';

@customElement('frida-form')
export class Form extends LitElement {
  @property() input = null;
           

  render() {
    return html`
        <style>
            :host {
                display: inline-block;
            }
            button {
                background: blueviolet;
                padding: 0.5rem;
                border: 0;
            }
        </style>
        <form>${this.input}</form>
    `;
  }
}