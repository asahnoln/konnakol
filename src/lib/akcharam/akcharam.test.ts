import { describe, expect, it } from 'vitest';
import Akcharam from './akcharam';
import Adhi from './thalams/adhi';
import MisraChapu from './thalams/misraChapu';
import Roopaga from './thalams/roopaga';

describe('akcharam', () => {
	it('returns empty string for empty song', () => {
		const a = new Akcharam();
		const at = new Adhi();
		const song = '';
		expect(a.hl(song, at)).toBe('');
	});

	it('highlights first beat in one word string', () => {
		const a = new Akcharam();
		const at = new Adhi();
		const song = 'Tha';
		expect(a.hl(song, at)).toBe('|1|(Tha)');
	});

	it('highlights first beat', () => {
		const a = new Akcharam();
		const at = new Adhi();
		const song = 'Tha Ka Dhi Mi';
		expect(a.hl(song, at)).toBe('|1|(Tha) Ka Dhi Mi');
	});

	it('highlights second beat', () => {
		const a = new Akcharam();
		const at = new Adhi();
		const song = 'Tha Ka Dhi Mi Dhi Dhom Dhom Ka';
		expect(a.hl(song, at)).toBe('|1|(Tha) Ka Dhi Mi |2|(Dhi) Dhom Dhom Ka');
	});

	it('saves original formatting', () => {
		const a = new Akcharam();
		const at = new Adhi();
		const song = `Tha Ka
			Dhi Mi		Dhi
		Dhom Dhom Ka`;
		expect(a.hl(song, at)).toBe(`|1|(Tha) Ka
			Dhi Mi		|2|(Dhi)
		Dhom Dhom Ka`);
	});

	it('highlights song in tisram', () => {
		const a = new Akcharam();
		const rt = new Roopaga();
		rt.g = 3;
		const song = 'Tha Ki Tha Tha Ki Tha';
		expect(a.hl(song, rt)).toBe('|1|(Tha) Ki Tha |2|(Tha) Ki Tha');
	});

	it('highlights and loops akcharam numbers in roopaga', () => {
		const a = new Akcharam();
		const rt = new Roopaga();
		const song = 'Tha Ka Dhi Mi Tha Ka Dhi Mi Tha Ka Dhi Mi Tha Ka Dhi Mi';
		expect(a.hl(song, rt)).toBe(
			'|1|(Tha) Ka Dhi Mi |2|(Tha) Ka Dhi Mi |3|(Tha) Ka Dhi Mi |1|(Tha) Ka Dhi Mi'
		);
	});

	it('highlights and loops akcharam numbers in misra chapu', () => {
		const a = new Akcharam();
		const rt = new MisraChapu();
		const song = 'Tha Ki Ta Tha Ka Dhi Mi Tha Ki Ta Tha Ka Dhi Mi';
		expect(a.hl(song, rt)).toBe(
			'|1|(Tha) Ki |2|(Ta) Tha Ka Dhi |3|(Mi) Tha Ki Ta |4|(Tha) Ka Dhi Mi'
		);
	});
});
