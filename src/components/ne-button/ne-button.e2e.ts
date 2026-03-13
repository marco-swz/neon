import { newE2EPage } from '@stencil/core/testing';

describe('ne-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ne-button>Hello</ne-button>');
    const element = await page.find('ne-button');
    expect(element.textContent).toEqual('Hello');
  });
});
