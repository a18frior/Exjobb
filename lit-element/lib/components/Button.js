var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, customElement } from 'lit-element';
let Button = class Button extends LitElement {
    constructor() {
        super(...arguments);
        this.label = null;
    }
    render() {
        return html `
        <style>
            :host {
                display: inline-block;
            }
            button {
                background: blueviolet;
                padding: 0.5rem;
                border: 0;
            }
        </style>
        <button>${this.label}</button>
    `;
    }
};
__decorate([
    property()
], Button.prototype, "label", void 0);
Button = __decorate([
    customElement('frida-button')
], Button);
export { Button };
//# sourceMappingURL=Button.js.map