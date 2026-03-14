import { newE2EPage } from '@stencil/core/testing';

describe('ne-dialog', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent(`
        <ne-dialog id="test-slots-default">
            <div>Default</div>
            <div slot="footer">Footer</div>
            <div slot="title">Title</div>
        </ne-dialog>`);
        const element = await page.find('ne-dialog');
        await element.callMethod('show');
        expect(element.textContent).toEqualText('TitleDefaultFooter');
    });
});
