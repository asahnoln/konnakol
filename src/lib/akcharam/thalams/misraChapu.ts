import { Base } from './thalam';

class MisraChapu extends Base {
	maxStep = 4;

	gathi(step: number): number {
		if (step == 1) {
			return this.g / 2;
		}

		return this.g;
	}
}

export default MisraChapu;
