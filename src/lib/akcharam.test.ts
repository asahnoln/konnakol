import { describe, expect, it } from "vitest";
import Akcharam from "./akcharam";

describe('akcharam', () => {
	it('returns empty string for empty song', () => {
		const a = new Akcharam();
		const song = '';
		expect(a.hl(song)).toBe('');
	});

	it('highlights first beat in one word string', () => {
		const a = new Akcharam();
		const song = 'Tha';
		expect(a.hl(song)).toBe('|1|(Tha)');
	});

	it('highlights first beat', () => {
		const a = new Akcharam();
		const song = 'Tha Ka Dhi Mi';
		expect(a.hl(song)).toBe('|1|(Tha) Ka Dhi Mi');
	});

	it('highlights second beat', () => {
		const a = new Akcharam();
		const song = 'Tha Ka Dhi Mi Dhi Dhom Dhom Ka';
		expect(a.hl(song)).toBe('|1|(Tha) Ka Dhi Mi |2|(Dhi) Dhom Dhom Ka');
	});

	it('saves original formatting', () => {
		const a = new Akcharam();
		const song = `Tha Ka
			Dhi Mi		Dhi
		Dhom Dhom Ka`;
		expect(a.hl(song)).toBe(`|1|(Tha) Ka
			Dhi Mi		|2|(Dhi)
		Dhom Dhom Ka`);
	});
})
