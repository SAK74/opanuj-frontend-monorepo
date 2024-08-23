import { describe, it, beforeEach, expect } from 'vitest';
import { successIcon } from './alert';

import './alert';

const exampled_text = 'Exampled text';
const exammpled_description = 'Some description';

describe('Test Alert component', () => {
  let rootShadow: ShadowRoot | null | undefined;
  beforeEach(() => {
    document.body.innerHTML = `<pp-alert message="${exampled_text}" descr="${exammpled_description}" variant="success"></pp-alert>`;
    rootShadow = document.body.querySelector('pp-alert')?.shadowRoot;
  });

  it('Should contain received text', () => {
    const textElement = rootShadow?.querySelector('[data-testid=message]');
    expect(textElement?.textContent).toBe(exampled_text);
  });

  it('SHould contain appropriate icon', () => {
    const slIcon = rootShadow?.querySelector('sl-icon');
    expect(slIcon?.getAttribute('src')).toBe(successIcon);
  });

  it('Shoould contain description', () => {
    const description = rootShadow?.querySelector('[data-testid=description');
    expect(description?.textContent).toBe(exammpled_description);
  });
});
