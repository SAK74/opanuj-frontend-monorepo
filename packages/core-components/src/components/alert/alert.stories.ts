import type { Meta, StoryObj } from '@storybook/web-components';

import './alert';
import { html } from 'lit';
import { variants, Variant } from '../../globals/variants';
import { ifDefined } from 'lit/directives/if-defined.js';

type CustomArgs = {
  open: boolean;
  closable: boolean;
  variant: Variant;
  duration?: number;
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
  },
  args: {
    open: true,
    variant: 'primary',
    // closable: true,
    message: 'Exampled alert',
    descr: 'some description',
  },
  render({ open, variant, closable, duration, message, descr }) {
    return html`
      <pp-alert
        ?open=${open}
        variant=${variant}
        ?closable=${closable}
        duration=${ifDefined(duration)}
        message=${message}
        descr=${ifDefined(descr)}
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
