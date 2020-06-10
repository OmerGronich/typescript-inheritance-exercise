import { House } from './House.js';

export class Apartment extends House {
	constructor(
		public numOfRooms: number,
		public squareMetre: number,
		public floor: number
	) {
		super(numOfRooms, squareMetre);
	}

	ordinalNums() {
		const j = this.floor % 10,
			k = this.floor % 100;
		if (j == 1 && k != 11) {
			return this.floor + 'st';
		}
		if (j == 2 && k != 12) {
			return this.floor + 'nd';
		}
		if (j == 3 && k != 13) {
			return this.floor + 'rd';
		}
		return this.floor + 'th';
	}

	print(): void {
		console.log(`This apt is on the ${this.ordinalNums()} floor`);
	}
}
