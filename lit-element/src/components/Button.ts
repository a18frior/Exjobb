import { LitElement, html, property, css, customElement } from 'lit-element';


@customElement('frida-button')
export class Button extends LitElement {
  public static styles = css`
  button {
    background: whitesmoke;
    padding: 0.5rem;
    border: 0;
}
`;

  @property() label = null;

  render() {
    return html`
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