import type { Meta, StoryObj } from '@storybook/web-components';

import './alert';
import { html } from 'lit';
import { variants, Variant } from '../../globals/variants';
import { ifDefined } from 'lit/directives/if-defined.js';

import infoIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/info-circle.svg';
import successIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/check2-circle.svg';
import setupIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/gear.svg';
import warningIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/exclamation-triangle.svg';
import dangerIcon from '../../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/exclamation-octagon.svg';

export { infoIcon, successIcon, setupIcon, warningIcon, dangerIcon };

import testIconSVG from '../../test.icons/next.svg';

type CustomArgs = {
  open: boolean;
  closable: boolean;
  variant: Variant;
  duration?: number;
  icon?: string;
};

const iconMapping = {
  'Info Icon': infoIcon,
  'Success Icon': successIcon,
  'Setup Icon': setupIcon,
  'Warning Icon': warningIcon,
  'Danger Icon': dangerIcon,
  'Custom Icon': testIconSVG,
};

const meta: Meta<
  CustomArgs & {
    message: string;
    descr?: string;
  }
> = {
  title: 'Components/Alert',
  component: 'pp-alert',
  argTypes: {
    open: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select' },
      options: variants,
    },
    // duration: {
    //   control: { type: 'number', min: 500, max: 10000, step: 100 },
    // },
    message: { type: 'string' },
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(iconMapping),
      mapping: iconMapping,
    },
  },
  args: {
    open: true,
    variant: 'primary',
    // closable: true,
    message: 'Exampled alert',
    descr: 'some description',
    icon: infoIcon,
  },
  render({ open, variant, closable, duration, message, descr, icon }) {
    return html`
      <pp-alert
        ?open=${open}
        variant=${variant}
        ?closable=${closable}
        duration=${ifDefined(duration)}
        message=${message}
        descr=${ifDefined(descr)}
        iconSrc=${ifDefined(icon)}
      >
        <span slot="describe">${descr}</span>
      </pp-alert>
    `;
  },
};

export const Primary: StoryObj<CustomArgs> = {
  args: {
    variant: 'primary',
  },
};

export const Closable: StoryObj<CustomArgs> = {
  args: {
    closable: true,
  },
};

export default meta;
