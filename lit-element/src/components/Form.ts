import { LitElement, html,css, customElement } from 'lit-element';


@customElement('frida-form')
export class Form extends LitElement {
    public static styles = css`
    :host {
        display:flex;
        flex-direction: column;
        padding:30px;
        width:450px;
        background-color:lightblue;
        align-items:flex-start;

    }
  `;

  render() {
    return html`
      
        <form><slot></slot></form>
    `;}
}
