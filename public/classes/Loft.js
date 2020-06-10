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
import { Studio } from './Studio';
var Loft = /** @class */ (function (_super) {
    __extends(Loft, _super);
    function Loft(numOfRooms, squareMetre, floor, purpose, windows) {
        var _this = _super.call(this, numOfRooms, squareMetre, floor, purpose) || this;
        _this.numOfRooms = numOfRooms;
        _this.squareMetre = squareMetre;
        _this.floor = floor;
        _this.purpose = purpose;
        _this.windows = windows;
        return _this;
    }
    Loft.prototype.print = function () {
        console.log("This loft has " + this.windows + " window" + (this.windows > 1 && 's'));
    };
    return Loft;
}(Studio));
export { Loft };
