import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/alert/alert';
import { Variant } from '../../globals/variants';

import '@shoelace-style/shoelace/dist/components/icon/icon';

// import infoIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/info-circle.svg';
// import successIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/check2-circle.svg';
// import setupIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/gear.svg';
// import warningIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/exclamation-triangle.svg';
// import dangerIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/exclamation-octagon.svg';

// export { successIcon };

// const matchedIcons: { [x in Variant]: string } = {
//   primary: infoIcon,
//   success: successIcon,
//   neutral: setupIcon,
//   warning: warningIcon,
//   danger: dangerIcon,
// };

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@sak74/design-tokens/css';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pp-alert')
export class Alert extends LitElement {
  @property({ reflect: true, type: Boolean }) open: boolean = true;
  @property({ reflect: true, type: Boolean }) closable: boolean = false;

  @property({ reflect: true, type: String }) variant: Variant = 'primary';
  @property({ reflect: true, type: Number }) duration?: number;

  @property({ type: String }) message?: string;
  @property({ type: String }) descr?: string;

  @property({ type: String }) iconSrc?: string;

  static override styles = css``;

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
