import { Base } from './thalam';

class KandaChapu extends Base {
	maxStep = 3;

	gathi(step: number): number {
		if (step == 2) {
			return this.g / 2;
		}

		return this.g;
	}
}

export default KandaChapu;
