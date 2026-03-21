import { newE2EPage } from '@stencil/core/testing';
describe('ne-input', () => {
    it('renders with value set', async () => {
        const page = await newE2EPage();
        await page.setContent('<form><ne-input name="input" value="Test"></ne-input></form>');
        const element = await page.find('ne-input');
        const formVal = await page.$eval('form', ($form) => new FormData($form).get('input'));
        expect(formVal).toBe('Test');
        expect(element.getAttribute('value')).toEqual('Test');
        expect(page.$("ne-input::-p-text(Test)")).not.toBeUndefined();
        expect(element.getProperty('value')).toEqual('Test');
    });
});
