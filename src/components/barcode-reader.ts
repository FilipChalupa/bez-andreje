import { LitElement, html, customElement, css } from "lit-element";

const prefixes = [
  85956105,
  859400178,
  859400748,
  8590077,
  859400684,
  8593807,
  859400367,
  859401571,
  859401318,
  859407300,
  8592062,
  859406994,
  859400888,
  85950063,
  858600160,
  8588000097,
  859415920,
  859401332,
  859404151,
  85956105,
  859415956,
  859402899,
  8593367,
  9770862958329,
  9771210116058,
  859401409,
  9770862592029,
  9771212312007,
  9771211781002
];

@customElement("barcode-reader")
export class BarcodeReader extends LitElement {
  firstUpdated() {
    const codeReader = new ZXing.BrowserBarcodeReader();
    console.log("ZXing code reader initialized");
    codeReader
      .decodeFromInputVideoDevice(
        undefined,
        this.shadowRoot!.getElementById("video")
      )
      .then((result: any) => {
        console.log(result);
        console.log(BarcodeReader.handleCode(result.text));
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  static handleCode(code: string) {
    code = code.split(" ").join("");

    if (
      prefixes.find(prefix => {
        return code.startsWith(prefix.toString());
      })
    ) {
      location.href = "/andrejovo";
    } else {
      location.href = "/ok";
    }
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
          background-color: #000000;
        }

        .content {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
        }

        .content::before {
          content: "";
          flex-grow: 1;
          background-color: rgba(255, 255, 255, 0.7);
        }

        .content::after {
          content: "";
          flex-grow: 2;
          background-color: rgba(255, 255, 255, 0.7);
        }

        h1 {
          margin: 0;
          padding: 0 1em 5vh;
          background-color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 1.2;
        }

        .frame {
          display: flex;
          height: 25vw;
        }

        .frame::before,
        .frame::after {
          content: "";
          width: 10vw;
          background-color: rgba(255, 255, 255, 0.7);
        }

        .frame-in {
          flex-grow: 1;
          border: 4px solid;
          border-radius: 4px;
          margin: -2px;
          clip-path: polygon(
            0 0,
            20px 0,
            20px 7px,
            calc(100% - 20px) 7px,
            calc(100% - 20px) 0,
            100% 0,
            100% 20px,
            calc(100% - 7px) 20px,
            calc(100% - 7px) calc(100% - 20px),
            100% calc(100% - 20px),
            100% 100%,
            calc(100% - 20px) 100%,
            calc(100% - 20px) calc(100% - 7px),
            20px calc(100% - 7px),
            20px 100%,
            0 100%,
            0 calc(100% - 20px),
            7px calc(100% - 20px),
            7px 20px,
            0 20px
          );
        }
      `
    ];
  }

  protected render() {
    return html`
      <video id="video" width="600" height="400"></video>
      <div class="content">
        <h1>
          Namiřte kameru
          <br />
          na čárový kód
        </h1>
        <div class="frame">
          <div class="frame-in"></div>
        </div>
      </div>
    `;
  }
}
