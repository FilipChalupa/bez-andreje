/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, customElement, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import '@polymer/paper-button';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

@customElement('my-view1')
export class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        section {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        
        section::before {
          content: '';
          flex-grow: 1;
        }
        
        section::after{
          content: '';
          flex-grow: 2;
        }
        
        img {
          flex-shrink: 0;
        }
      `
    ];
  }

  protected render() {
    return html`
      <section>
        <img src="images/manifest/icon-512x512.png" width="256" height="256" alt="Logo">
        <h2>Bez Andreje</h2>
        <p>Zjistěte, jestli zboží, které chcete koupit, vyrobil Andrej.</p>
        <a href="/ctecka" tabindex="-1" style="text-decoration: none; color: inherit;">
            <paper-button raised>Otevřít čtečku čárových kódů</paper-button>
        </a>
      </section>
    `;
  }
}
