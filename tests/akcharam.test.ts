import { expect, test } from '@playwright/test';

test('akcharam page generates emphasized konnakol', async ({ page }) => {
	await page.goto('/akcharam');
	await page.getByPlaceholder('Konnakol composition').fill(`Tha Tha Dhi Dhi Dhom Dhom Nam
Nam Tha Tha Dhi Dhi Dhom Nam`);
	await page.getByPlaceholder('Thalam').selectOption('Roopaga');
	await page.getByPlaceholder('Gathi').selectOption('Tisram');
	await page.getByText('Highlight').click();
	expect(await page.innerHTML('div.result')).toBe(
		'<em>Tha<sup>1</sup></em> Tha Dhi Dhi Dhom Dhom <em>Nam<sup>2</sup></em><br>Nam Tha Tha Dhi Dhi <em>Dhom<sup>3</sup></em> Nam'
	);
});
