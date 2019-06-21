import {html, customElement} from 'lit-element';
import { PageViewElement } from './page-view-element.js';

import '@polymer/paper-button';
import {SharedResultStyles} from "./shared-styles";

@customElement('view-danger')
export class ViewDanger extends PageViewElement {

	static get styles() {
		return [
			SharedResultStyles,
		]
	}

	protected render() {
		return html`
			<section>
				<img src="images/danger.svg" width="300" height="300" alt="">
			  <h1>Babišovo</h1>
        <a href="/ctecka" tabindex="-1" style="text-decoration: none; color: inherit;">
            <paper-button raised>Zpět</paper-button>
        </a>
			</section>
      
    `;
	}
}
