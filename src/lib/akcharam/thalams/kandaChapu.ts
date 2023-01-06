import { Base } from './thalam';

class KandaChapu extends Base {
	maxStep = 3;

	gathi(step: number): number {
		if (step == 2) {
			return 2;
		}

		return 4;
	}
}

export default KandaChapu;
