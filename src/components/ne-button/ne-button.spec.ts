import { expect, test } from '@playwright/test';
import { NeonButton } from './ne-button';

const TEST_URL = 'http://localhost:8080/src/components/ne-button/ne-button.spec.html';
const DUMMY_URL = 'http://localhost:8080/dummy';

test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
});

test('The button gets correctly rendered', async ({ page }) => {
    let loc = page.locator('#test-rendering');
    await expect(loc).toHaveText('Text');
});

test('The text can be changed dynamically', async ({ page }) => {
    let loc = page.locator('#test-rendering');
    await loc.evaluate($btn => $btn.innerHTML = 'New Text');
    await expect(loc).toHaveText('New Text');
});

test('The loading state correctly renders and disables clicks', async ({ page }) => {
    const loc = page.locator('#test-loading');
    await expect(loc).toHaveAttribute('count', '0');
    await loc.click();
    await expect(loc).toHaveAttribute('count', '1');

    // @ts-ignore
    await loc.evaluate(($btn: NeonButton) => {
        $btn.loading = true;
    })

    await loc.click({ force: true });
    await expect(loc).toHaveAttribute('count', '1');

    // @ts-ignore
    await loc.evaluate(($btn: NeonButton) => {
        $btn.loading = false;
    })

    await loc.click();
    await expect(loc).toHaveAttribute('count', '2');

    // The link should not be followed

    // @ts-ignore
    await loc.evaluate(($btn: NeonButton) => {
        $btn.href = '/dummy';
        $btn.loading = true;
    });

    await loc.click({ force: true });
    await expect(page).not.toHaveURL(DUMMY_URL);
});

test('The disabled state correctly renders and disables clicks', async ({ page }) => {
    let loc = page.locator('#test-disabled');
    await expect(loc).toHaveAttribute('count', '0');
    await loc.click();
    await expect(loc).toHaveAttribute('count', '1');

    await page.evaluate(() => {
        document.querySelector<NeonButton & HTMLElement>('#test-disabled')!.disabled = true;
    })

    await loc.click({ force: true });
    await expect(loc).toHaveAttribute('count', '1');

    await page.evaluate(() => {
        document.querySelector<NeonButton & HTMLElement>('#test-disabled').disabled = false;
    })

    await loc.click();
    await expect(loc).toHaveAttribute('count', '2');

    // The link should not be followed if `href` is set

    // @ts-ignore
    await loc.evaluate(($btn: NeonButton) => {
        $btn.href = '/dummy';
        $btn.disabled = true;
    });

    await loc.click({ force: true });
    await expect(page).not.toHaveURL(DUMMY_URL);
});

test('The href property correctly sets links', async ({ page }) => {
    let loc = page.locator('#test-href');

    // `href` should open the link

    await loc.click();
    await expect(page).toHaveURL(DUMMY_URL);
    await page.goto(TEST_URL);

    // Removing `href` should not open the link

    // @ts-ignore
    await loc.evaluate(($btn: NeonButton) => {
        $btn.href = '';
    })
    await loc.click();
    await expect(page).not.toHaveURL(DUMMY_URL);
});

test('Form elements are submitted', async ({ page }) => {
    let loc = page.locator('#test-submit');

    await loc.click();
});
