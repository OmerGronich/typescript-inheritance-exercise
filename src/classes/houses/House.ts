export class House {
	constructor(public numOfRooms: number, public squareMetre: number) {}

	print(): void {
		console.log(
			`Number of rooms: ${this.numOfRooms}, Size: ${this
				.squareMetre} square metre`
		);
	}
}
