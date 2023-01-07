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

test('akcharam example fills in a song', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Fill in an example' }).click();
	expect(await page.getByPlaceholder('Tha Dhi Dhom Nam . . .').inputValue())
		.toBe(`Thaam . . Ta Tha Ka Dhi Na

Tha- -an- -gu
Dhe- -en- -gu
Tha- -an- -gu
Ta Tha Ka Dhi Na

Tha an gu
Dhe en gu
Tha an gu
Ta Tha Ka Dhi Na

Thangu . .
Dheengu . . 
Thaangu . .
Ta Tha Ka Dhi Na Thaam .
Ta Tha Ka Dhi Na Tha- -am
Ta Tha Ka Dhi Na

Tha`);
});

test('clear button clears the field', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Composition').fill('Tha Tha Dhi Dhi Dhom Dhom Nam');
	await page.getByRole('button', { name: 'Clear' }).click();
	expect(await page.getByLabel('Composition').inputValue()).toBeFalsy();
});
