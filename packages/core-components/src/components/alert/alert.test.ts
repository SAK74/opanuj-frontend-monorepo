import { describe, it, beforeEach, expect } from 'vitest';
import {
  successIcon,
  dangerIcon,
  infoIcon,
  setupIcon,
  warningIcon,
} from './alert.stories';

import './alert';

const exampled_text = 'Exampled text';
const exammpled_description = 'Some description';

const icons: { [k: string]: string } = {
  successIcon,
  dangerIcon,
  infoIcon,
  setupIcon,
  warningIcon,
};

describe('Test text rendering', () => {
  let rootShadow: ShadowRoot | null | undefined;
  beforeEach(() => {
    document.body.innerHTML = `<pp-alert message="${exampled_text}" descr="${exammpled_description}"
     variant="success" iconSrc="${infoIcon}"></pp-alert>`;
    rootShadow = document.body.querySelector('pp-alert')?.shadowRoot;
  });

  it('Should contain received text', () => {
    const textElement = rootShadow?.querySelector('[data-testid=message]');
    expect(textElement?.textContent).toBe(exampled_text);
  });

  it('Shoould contain description', () => {
    const description = rootShadow?.querySelector('[data-testid=description');
    expect(description?.textContent).toBe(exammpled_description);
  });
});

describe.each(Object.entries(icons))(
  `Test for %s icon `,
  (iconName, iconSrc) => {
    beforeEach(() => {
      document.body.innerHTML = `<pp-alert message="${exampled_text}"
         descr="${exammpled_description}" variant="success" iconSrc="${iconSrc}"></pp-alert>`;
    });
    it(`Icon ${iconName} should be rendered`, () => {
      const rootShadow = document.body.querySelector('pp-alert')?.shadowRoot;

      const slIcon = rootShadow?.querySelector('sl-icon');

      expect(slIcon?.getAttribute('src')).toBe(iconSrc);
    });
  }
);
