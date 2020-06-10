import { House } from './House';

export class Tipi extends House {
	constructor(
		public numOfRooms: number,
		public squareMetre: number,
		public tipiColors: [string, string]
	) {
		super(numOfRooms, squareMetre);
	}

	print() {
		console.log(`Tipi colors: ${this.tipiColors}`);
	}
}
