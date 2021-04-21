import { LitElement, html,css, customElement } from 'lit-element';


@customElement('frida-search')
export class Search extends LitElement {
  public static styles = css`
  :host {
     margin: 20px;
     display: block;
  }
  button{background-color:white; padding:5px; margin-top: 5px;}
`;
  render() {
    return html`
 

        <input id="search"/>
        <button id="submit" @click="${this.onClick.bind(this)}">Search</button>
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