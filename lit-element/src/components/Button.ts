import { LitElement, html, property, customElement } from 'lit-element';

@customElement('frida-button')
export class Button extends LitElement {
  @property() label = null;

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
        <button @click="${this.onClick?.bind(this)}">${this.label}</button>
    `;
  }

  private onClick() {
    this.dispatchEvent(new CustomEvent('fridasClick', {
      detail: {
        message: 'This is some message'
      }
    }));
  }
}