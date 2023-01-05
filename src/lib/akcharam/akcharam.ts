import type { Thalam } from './thalams/thalam';

class Akcharam {
	hl(song: string, thalam: Thalam): string {
		return this.rpl(song, 1, thalam);
	}

	private rpl(song: string, step: number, thalam: Thalam): string {
		const regexp = new RegExp(`((?:\\w+\\s*){0,${thalam.gathi(step)}})(.*)`, 's');
		const match = song.match(regexp);
		let result = '';
		result += match![1].replace(/(\w+)(.*)/, `|${step}|($1)$2`);
		if (match![2]) {
			result += this.rpl(match![2], thalam.nextStep(step), thalam);
		}
		return result;
	}
}

export default Akcharam;
