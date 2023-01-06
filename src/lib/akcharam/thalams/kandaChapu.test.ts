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

	it('has 6 gathi', () => {
		const kc = new KandaChapu();
		kc.g = 6;
		expect(kc.gathi(1)).toBe(6);
	});

	it('has 3 gathi on 2 beat', () => {
		const kc = new KandaChapu();
		kc.g = 6;
		expect(kc.gathi(2)).toBe(3);
	});
});
