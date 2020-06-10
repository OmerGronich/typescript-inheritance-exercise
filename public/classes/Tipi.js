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
import { House } from './House';
var Tipi = /** @class */ (function (_super) {
    __extends(Tipi, _super);
    function Tipi(numOfRooms, squareMetre, tipiColors) {
        var _this = _super.call(this, numOfRooms, squareMetre) || this;
        _this.numOfRooms = numOfRooms;
        _this.squareMetre = squareMetre;
        _this.tipiColors = tipiColors;
        return _this;
    }
    Tipi.prototype.print = function () {
        console.log("Tipi colors: " + this.tipiColors);
    };
    return Tipi;
}(House));
export { Tipi };
