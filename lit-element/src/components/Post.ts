import { LitElement, html, css, customElement, property } from "lit-element";

type IPost = {
  heading: string;
  sentence: string;
};

@customElement("frida-post")
export class Post extends LitElement {

  public static styles = css`
    :host {
       display: block;
    }
    div {margin-top:10px;
      width: 700px;
       padding: 20px;
       box-shadow: 2px 5px 5px #888888;}
  `;


  @property({ type: "object" })
  public post: IPost|null = null;

  render() {
    return html`
      <div><h3>${this.post?.heading}</h3><p>${this.post?.sentence}</p></div>`
  }} 
