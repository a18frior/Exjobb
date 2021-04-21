import { LitElement, html, customElement,css, property} from 'lit-element';
@customElement('side-column')
export class div extends LitElement {
 

 @property({ type: 'string' })
 public name: string|null = null;

 public static styles = css`
 :host {
  width:15%;
  margin-top:200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;  
    
 }
`;
  

  render() {
    return html`
        <div>
            ${this.name}
        <slot></slot></div>
        
        
    `;
  }
}
