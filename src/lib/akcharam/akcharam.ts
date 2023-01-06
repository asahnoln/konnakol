import type { Thalam } from './thalams/thalam';

class Akcharam {
	hl(song: string, thalam: Thalam): string {
		return this.rpl(song, 1, thalam, '|step|($1)$2');
	}

	hlHtml(song: string, thalam: Thalam): string {
		return this.rpl(song, 1, thalam, '<em>$1<sup>step</sup></em>$2');
	}

	private rpl(song: string, step: number, thalam: Thalam, template: string): string {
		const regexp = new RegExp(`((?:\\w+\\s*){0,${thalam.gathi(step)}})(.*)`, 's');
		const match = song.match(regexp);
		let result = '';
		result += match![1].replace(/(\w+)(.*)/, template.replace('step', step.toString()));
		if (match![2]) {
			result += this.rpl(match![2], thalam.nextStep(step), thalam, template);
		}
		return result;
	}
}

export default Akcharam;
