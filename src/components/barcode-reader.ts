import {LitElement, html, customElement, css} from 'lit-element'

@customElement('barcode-reader')
export class ShopItem extends LitElement {
	firstUpdated() {
		const codeReader = new ZXing.BrowserBarcodeReader()
		console.log('ZXing code reader initialized')
		codeReader.decodeFromInputVideoDevice(undefined, this.shadowRoot!.getElementById('video')).then((result: any) => {
			console.log(result)
		}).catch((err: Error) => {
			console.error(err)
		})
	}

	static get styles() {
		return [
			css`
				#video {
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: fixed;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
				}
			`
		]
	}

	protected render() {
		return html`
			<video id="video" width="600" height="400"></video>
		`;
	}
}
