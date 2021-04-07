import { LitElement, html, customElement, property} from 'lit-element';
@customElement('side-column')
export class div extends LitElement {
 

 @property({ type: 'string' })
 public email: string|null = null;
  

  render() {
    return html`
        <style>
            :host {
              
                 width:15%;
                margin-top:200px;
                display:flex;
                flex-direction:column;
                align-items: center;

            }
            
            

        </style>
        
        <div  >
            ${this.email}
        <slot></slot></div>
        
        
    `;
  }
}
