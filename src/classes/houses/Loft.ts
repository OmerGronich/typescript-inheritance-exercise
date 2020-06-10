import { Studio } from './Studio.js';

export class Loft extends Studio {
	constructor(
		public numOfRooms: number,
		public squareMetre: number,
		public floor: number,
		public purpose: string,
		public windows: number
	) {
		super(numOfRooms, squareMetre, floor, purpose);
	}

	print() {
		console.log(
			`This loft has ${this.windows} window${this.windows > 1 && 's'}`
		);
	}
}
