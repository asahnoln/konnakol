import { expect, test } from '@playwright/test';

test('akcharam page generates emphasized konnakol', async ({ page }) => {
	await page.goto('/akcharam');
	await page.getByPlaceholder('Konnakol composition').fill(`Tha Dhi Dhom Nam
Tha Dhi Dhom Nam`);
	await page.getByText('Highlight').click();
	expect(await page.innerHTML('div.result')).toBe('<em>Tha<sup>1</sup></em> Dhi Dhom Nam<br><em>Tha<sup>2</sup></em> Dhi Dhom Nam');
});
