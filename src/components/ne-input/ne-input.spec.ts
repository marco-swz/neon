import { expect, test } from '@playwright/test';
// import { NeonInput } from './ne-input';

const TEST_URL = 'http://localhost:8080/src/components/ne-input/ne-input.spec.html';

test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
});

test('The input gets correctly rendered', async ({ page }) => {
    const inp = page.locator('#test-rendering');
    await expect(inp).toHaveJSProperty('value', 'Test');
    await expect(inp).toHaveAttribute('value', 'Test');
    const formVal = await inp.evaluate($inp => new FormData(($inp as HTMLInputElement).form).get('val'))
    expect(formVal).toEqual('Test');
});

