class Akcharam {
	hl(song: string): string {
		return this.rpl(song, 1);
	}

	private rpl(song: string, step: number): string {
		let match = song.match(/((?:\w+\s*){0,4})(.*)/s);
		let result = '';
		result += match![1].replace(/(\w+)(.*)/, `|${step}|($1)$2`)
		if (match![2]) {
			result += this.rpl(match![2], ++step);
		}
		return result;
	}
}

export default Akcharam;
