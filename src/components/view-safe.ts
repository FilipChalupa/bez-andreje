import {html, customElement, css} from 'lit-element';
import { PageViewElement } from './page-view-element.js';

import '@polymer/paper-button';
import {SharedResultStyles} from "./shared-styles";

@customElement('view-safe')
export class ViewSafe extends PageViewElement {

	static get styles() {
		return [
			SharedResultStyles,
			css`
				a {
					text-decoration: none;
					color: inherit;
				}
			`,
		]
	}

	protected render() {
		return html`
			<section>
				<img src="images/safe.svg" width="300" height="300" alt="">
			  <h1>Bez Babiše</h1>
        <a href="/ctecka" tabindex="-1">
            <paper-button raised>Zpět</paper-button>
        </a>
			</section>
      
    `;
	}
}
