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
				<div class="image">
					<img src="images/danger.svg" alt="">
				</div>
			  <h1>Babišovo</h1>
        <a href="/ctecka" tabindex="-1" style="text-decoration: none; color: inherit;">
            <paper-button raised>Zpět</paper-button>
        </a>
			</section>
      
    `;
	}
}
