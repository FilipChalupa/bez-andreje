import {html, customElement, css} from 'lit-element';
import { PageViewElement } from './page-view-element.js';

import '@polymer/paper-button';

@customElement('view-danger')
export class ViewDanger extends PageViewElement {

	static get styles() {
		return [
			css`
				section {
					padding: 1em;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					min-height: 50vh;
				}

				a {
					margin-top: 1em;
				}
			`
		]
	}

	protected render() {
		return html`
			<section>
			  <h1>Babišovo</h1>
        <a href="/ctecka" tabindex="-1" style="text-decoration: none; color: inherit;">
            <paper-button raised>Zpět</paper-button>
        </a>
			</section>
      
    `;
	}
}
