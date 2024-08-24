import { html, LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/alert/alert';
import { Variant } from '../../globals/variants';

import '@shoelace-style/shoelace/dist/components/icon/icon';

import '@shoelace-style/shoelace/dist/themes/light.css';
// import '@sak74/design-tokens/css';
import { ifDefined } from 'lit/directives/if-defined.js';

import {
  ButtonTextColor,
  ColorAliasPrimary1,
  ColorAliasPrimary10,
  ColorAliasPrimary11,
  ColorAliasPrimary2,
  ColorAliasPrimary3,
  ColorAliasPrimary4,
  ColorAliasPrimary5,
  ColorAliasPrimary6,
  ColorAliasPrimary7,
  ColorAliasPrimary8,
  ColorAliasPrimary9,
} from '@sak74/design-tokens';

@customElement('pp-alert')
export class Alert extends LitElement {
  static override styles = css`
    :host {
      --sl-color-primary-50: ${unsafeCSS(ColorAliasPrimary1)};
      --sl-color-primary-100: ${unsafeCSS(ColorAliasPrimary2)};
      --sl-color-primary-200: ${unsafeCSS(ColorAliasPrimary3)};
      --sl-color-primary-300: ${unsafeCSS(ColorAliasPrimary4)};
      --sl-color-primary-400: ${unsafeCSS(ColorAliasPrimary5)};
      --sl-color-primary-500: ${unsafeCSS(ColorAliasPrimary6)};
      --sl-color-primary-600: ${unsafeCSS(ColorAliasPrimary7)};
      --sl-color-primary-700: ${unsafeCSS(ColorAliasPrimary8)};
      --sl-color-primary-800: ${unsafeCSS(ColorAliasPrimary9)};
      --sl-color-primary-900: ${unsafeCSS(ColorAliasPrimary10)};
      --sl-color-primary-950: ${unsafeCSS(ColorAliasPrimary11)};
      --sl-color-neutral-600: ${unsafeCSS(ButtonTextColor)};
    }
  `;
  @property({ reflect: true, type: Boolean }) open: boolean = true;
  @property({ reflect: true, type: Boolean }) closable: boolean = false;

  @property({ reflect: true, type: String }) variant: Variant = 'primary';
  @property({ reflect: true, type: Number }) duration?: number;

  @property({ type: String }) message?: string;
  @property({ type: String }) descr?: string;

  @property({ type: String }) iconSrc?: string;

  protected override render(): unknown {
    return html`
      <sl-alert
        ?open=${this.open}
        variant=${this.variant}
        ?closable=${this.closable}
        duration=${ifDefined(this.duration)}
      >
        <strong data-testid="message">${this.message}</strong>
        <div data-testid="description">${this.descr}</div>
        <sl-icon src=${ifDefined(this.iconSrc)} slot="icon"></sl-icon>
      </sl-alert>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-alert': Alert;
  }
}
