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
import { Apartment } from './Apartment';
var Studio = /** @class */ (function (_super) {
    __extends(Studio, _super);
    function Studio(numOfRooms, squareMetre, floor, purpose) {
        var _this = _super.call(this, numOfRooms, squareMetre, floor) || this;
        _this.numOfRooms = numOfRooms;
        _this.squareMetre = squareMetre;
        _this.floor = floor;
        _this.purpose = purpose;
        return _this;
    }
    Studio.prototype.print = function () {
        console.log("This studio is for " + this.purpose);
    };
    return Studio;
}(Apartment));
export { Studio };
