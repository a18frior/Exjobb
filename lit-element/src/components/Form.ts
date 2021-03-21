import { LitElement, html, customElement } from 'lit-element';

@customElement('frida-form')
export class Form extends LitElement {

  render() {
    return html`
        <style>
            :host {
                display: inline-block;
                background: blueviolet;
                padding: 0.5rem;
                border: 0;
            }
        </style>
        <form><slot></slot></form>
    `;
  }
}