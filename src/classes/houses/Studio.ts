import { Apartment } from './Apartment.js';

export class Studio extends Apartment {
	constructor(
		public numOfRooms: number,
		public squareMetre: number,
		public floor: number,
		public purpose: string
	) {
		super(numOfRooms, squareMetre, floor);
	}

	print() {
		console.log(`This studio is for ${this.purpose}`);
	}
}
