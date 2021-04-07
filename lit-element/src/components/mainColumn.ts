import { LitElement, html, customElement, property } from 'lit-element';
@customElement('main-column')
export class div extends LitElement {
  @property() id='';

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
            #hidden{display:none;}
            #shown{display:block;}

            
             
        </style>
        
        <div id=${this.id}><slot></slot></div>
        
        
    `;
  }
}
