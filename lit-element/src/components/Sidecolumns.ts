import { LitElement, html, customElement } from 'lit-element';
@customElement('side-column')
export class div extends LitElement {
  

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
        
        <div ><slot></slot></div>
        
        
    `;
  }
}
