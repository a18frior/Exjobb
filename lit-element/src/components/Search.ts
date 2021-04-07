import { LitElement, html, customElement } from 'lit-element';


@customElement('frida-search')
export class Search extends LitElement {
  render() {
    return html`
        <style>
            
            button {
                background: whitesmoke;
                padding: 0.5rem;
                border: 0;
            }
            
        </style>
        <input/>
        <button @click="${this.onClick.bind(this)}">Search</button>
    `;
  }

  private onClick() {
    this.dispatchEvent(new CustomEvent('search', {
      detail: {
        search: (<HTMLInputElement>this.shadowRoot?.querySelector('input')).value
      }
    }));
  }

  


}