import { House } from './House';

export class Vila extends House {
	constructor(
		public numOfRooms: number,
		public squareMetre: number,
		public numOfSwimmingPools: number
	) {
		super(numOfRooms, squareMetre);
	}

	print(): void {
		console.log(`This vila has ${this.numOfSwimmingPools} swimming pools`);
	}
}
