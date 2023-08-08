import { describe, expect, it } from 'vitest';
import MisraChapu from './misraChapu';

describe('Misra chapu', () => {
	it('has 4 claps', () => {
		const kc = new MisraChapu();
		expect(kc.nextStep(4)).toBe(1);
	});

	it('has 2 gathi on 1 beat', () => {
		const kc = new MisraChapu();
		expect(kc.gathi(1)).toBe(2);
	});

	it('has 6 gathi', () => {
		const kc = new MisraChapu();
		kc.g = 6;
		expect(kc.gathi(2)).toBe(6);
	});

	it('has 3 gathi on 1 beat', () => {
		const kc = new MisraChapu();
		kc.g = 6;
		expect(kc.gathi(1)).toBe(3);
	});
});
