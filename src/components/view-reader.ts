import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

@customElement('view-reader')
export class ViewReader extends PageViewElement {
    static get styles() {
        return [
            SharedStyles
        ];
    }

    protected render() {
        return html`
      <section>
        <h2>Reader</h2>
      </section>
    `;
    }
}
