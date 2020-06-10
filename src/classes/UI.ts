export class UI {
	constructor(
		public houseForm: HTMLFormElement,
		public aptForm: HTMLFormElement,
		public loftForm: HTMLFormElement,
		public studioForm: HTMLFormElement,
		public tipiForm: HTMLFormElement,
		public vilaForm: HTMLFormElement,
		public houseCounter: HTMLElement,
		public aptCounter: HTMLElement
	) {}

	static clearInputs(arrOfEls: HTMLInputElement[]): void {
		arrOfEls.forEach(el => (el.value = ''));
	}
}
