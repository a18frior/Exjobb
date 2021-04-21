import { LitElement, html, css, customElement } from "lit-element";
import * as FreeGrammar from './libs/FreeGrammar';
import "./components/Button";
import "./components/Input";
import "./components/Form";
import "./components/Sidecolumns";
import "./components/mainColumn";
import "./components/Post";
import "./components/Search";

type Post = {
  heading: string;
  sentence: string;
};

@customElement("frida-app")
export class App extends LitElement {
  public static styles = css`
    :host {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      display: flex;
      flex-direction:row;
    }
  
  `;
  private state: {
    page: string | null;
    search: string | null;
    inputForm: { name: string | null };
  } = {
    page: null,
    search: null,
    inputForm: {
      name: null,
    },
  };

  render() {
    if (this.state.page === "post") {
      const posts = [];
      for (const post of this.getPosts()) {
        if (!this.state.search || post.heading.includes(this.state.search) || post.sentence.includes(this.state.search)) {
          posts.push(html`<frida-post .post="${post}"></frida-post>`);
        }
      }
      return html`
        <frida-search
          @search="${(event: CustomEvent) => {
            this.state.search = event.detail.search;
            this.requestUpdate();
          }}"
        ></frida-search>
        
        <side-column .name="${this.state.inputForm.name}"></side-column>
        <main-column> ${posts} </main-column>
        <side-column></side-column>
      `;
    }
    return html`
      <side-column></side-column>
      <main-column>
        <frida-form>
          <frida-input
            @submit="${(event: CustomEvent) => {
              this.state.page = "post";
              this.state.inputForm.name = event.detail.name;
              this.requestUpdate();
            }}"
          ></frida-input>
        </frida-form>
      </main-column>
      <side-column></side-column>
    `;
  }

  private getPosts(): Post[] {
    const posts = window.sessionStorage.getItem("posts");
    if (posts) {
      return JSON.parse(posts);
    }
    let random = null;
    let random2 = null;
    let heading = null;
    let sentence = null;
    let paragraf = null;
    const headings = [];
    const sentences = [];
    for (let index = 0; index < 1000; index++) {
      random = FreeGrammar.getRandomInt(1, 4);
      for (let index = 0; index < random; index++) {
        heading = FreeGrammar.generate_sentence(
          0.5,
          0.5,
          0.5,
          0.5,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        );
        headings.push(heading);

        random2 = FreeGrammar.getRandomInt(3, 20);

        for (let index = 0; index < random2; index++) {
          sentence = FreeGrammar.generate_sentence(
            0.5,
            0.5,
            0.5,
            0.5,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          );

          if (index <= 1) {
            paragraf = sentence;
          }
          if (index > 1) {
            paragraf += sentence;
          }

          if (index % 12 === 0) {
            sentences.push(paragraf);
            paragraf = "";
          }
        }
      }
    }
    const newPosts = [];
    for (let index=0; index<headings.length; index++){
      newPosts.push(<Post>{
        heading: headings[index],
        sentence: sentences[index]
      });
    }
    window.sessionStorage.setItem('posts', JSON.stringify(newPosts));
    return newPosts;
  }
}
