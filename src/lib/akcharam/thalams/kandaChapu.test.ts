import { describe, expect, it } from 'vitest';
import KandaChapu from './kandaChapu';

describe('Khanda chapu', () => {
	it('has 3 claps', () => {
		const kc = new KandaChapu();
		expect(kc.nextStep(3)).toBe(1);
	});

	it('has 2 gathi on 2 beat', () => {
		const kc = new KandaChapu();
		expect(kc.gathi(2)).toBe(2);
	});
});
