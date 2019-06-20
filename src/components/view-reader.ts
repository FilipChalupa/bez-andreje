import {html, customElement} from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import './barcode-reader'

@customElement('view-reader')
export class ViewReader extends PageViewElement {
    protected render() {
        return html`
        <barcode-reader></barcode-reader>
    `;
    }
}
