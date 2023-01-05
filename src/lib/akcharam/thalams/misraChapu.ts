import { Base } from './thalam';

class MisraChapu extends Base {
	maxStep = 4;

	gathi(step: number): number {
		if (step == 1) {
			return 2;
		}

		return 4;
	}
}

export default MisraChapu;
