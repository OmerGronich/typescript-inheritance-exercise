var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { House } from './House.js';
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment(numOfRooms, squareMetre, floor) {
        var _this = _super.call(this, numOfRooms, squareMetre) || this;
        _this.numOfRooms = numOfRooms;
        _this.squareMetre = squareMetre;
        _this.floor = floor;
        return _this;
    }
    Apartment.prototype.ordinalNums = function () {
        var j = this.floor % 10, k = this.floor % 100;
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
    };
    Apartment.prototype.print = function () {
        console.log("This apt is on the " + this.ordinalNums() + " floor");
    };
    return Apartment;
}(House));
export { Apartment };
