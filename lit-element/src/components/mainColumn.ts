import { LitElement, html, css, customElement} from 'lit-element';
@customElement('main-column')
export class div extends LitElement {
  public static styles = css`
  input {margin-top:10px;}
  :host{
    width:70%;
    margin-top:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;


}
`;

  render() {
    return html`  
        <div><slot></slot></div>
        
        
    `;
  }
}
