import { LitElement, html, property, customElement } from 'lit-element';


@customElement('frida-button')
export class Button extends LitElement {
  @property() label = null;

  render() {
    return html`
        <style>
            
            button {
                background: whitesmoke;
                padding: 0.5rem;
                border: 0;
            }
        </style>
        <button @focus="${this.onFocus.bind(this)}">${this.label}</button>
    `;
  }

  private onFocus() {
    this.dispatchEvent(new CustomEvent('fridasFocus', {
      detail: {
        message: 'This is some message'
      }
    }));
  }

  


}