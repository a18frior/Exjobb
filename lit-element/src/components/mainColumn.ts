import { LitElement, html, customElement} from 'lit-element';
@customElement('main-column')
export class div extends LitElement {


  render() {
    return html`
        <style>
            :host{
                width:70%;
                margin-top:200px;
                display:flex;
                flex-direction:column;
                align-items:center;

            }
           

            
             
        </style>
        
        <div><slot></slot></div>
        
        
    `;
  }
}
