import { expect, test } from '@playwright/test';

test('akcharam page has form', async ({ page }) => {
	await page.goto('/akcharam');
	expect(await page.innerHTML('form')).toHaveLength(1);
});
