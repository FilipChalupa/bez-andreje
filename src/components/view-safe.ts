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
				<div class="image">
					<img src="images/safe.svg" alt="">
				</div>
			  <h1>Bez Babiše</h1>
				<a href="/ctecka" tabindex="-1">
					<paper-button raised>Zpět</paper-button>
				</a>
			</section>
      
    `;
	}
}
