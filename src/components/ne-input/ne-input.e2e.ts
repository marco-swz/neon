import { newE2EPage } from '@stencil/core/testing';

describe('ne-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ne-input value="Test"></ne-input>');
    const element = await page.find('ne-input');
    expect(element.getProperty('value')).toEqual('Test');
  });
});
