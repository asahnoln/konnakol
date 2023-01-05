export class Base implements Thalam {
	g = 4;
	maxStep = 8;

	gathi(): number {
		return this.g;
	}
	nextStep(step: number): number {
		if (step == this.maxStep) {
			return 1;
		}

		return step + 1;
	}
}

export interface Thalam {
	gathi(step: number): number;
	nextStep(step: number): number;
}
