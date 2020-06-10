var House = /** @class */ (function () {
    function House(numOfRooms, squareMetre) {
        this.numOfRooms = numOfRooms;
        this.squareMetre = squareMetre;
    }
    House.prototype.print = function () {
        console.log("Number of rooms: " + this.numOfRooms + ", Size: " + this
            .squareMetre + " square metre");
    };
    return House;
}());
export { House };
