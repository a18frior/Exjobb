import { LitElement, html, css, customElement, property } from "lit-element";

type IPost = {
  heading: string;
  sentance: string;
};

@customElement("frida-post")
export class Post extends LitElement {
  public static styles = css`
    :host {
       display: block;
    }
  `;

  @property({ type: "object" })
  public post: IPost|null = null;

  render() {
    return html`
      <h3>${this.post?.heading}</h3><p>${this.post?.sentance}</p>
    `;
  }
}
