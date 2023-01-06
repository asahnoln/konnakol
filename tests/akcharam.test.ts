import { expect, test } from '@playwright/test';

test('akcharam page generates emphasized konnakol', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Composition').fill(`Tha Tha Dhi Dhi Dhom Dhom Nam
Nam Tha Tha Dhi Dhi Dhom Nam`);
	await page.getByLabel('Thalam').selectOption('Roopaga');
	await page.getByLabel('Gathi').selectOption('Tisram');
	await page.getByText('Highlight Akcharams').click();
	expect(await page.innerHTML('pre.result')).toBe(
		`<strong>Tha<sup>1</sup></strong> Tha Dhi Dhi Dhom Dhom <strong>Nam<sup>2</sup></strong>
Nam Tha Tha Dhi Dhi <strong>Dhom<sup>3</sup></strong> Nam`
	);
});
