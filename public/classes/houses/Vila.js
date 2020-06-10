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
var Vila = /** @class */ (function (_super) {
    __extends(Vila, _super);
    function Vila(numOfRooms, squareMetre, numOfSwimmingPools) {
        var _this = _super.call(this, numOfRooms, squareMetre) || this;
        _this.numOfRooms = numOfRooms;
        _this.squareMetre = squareMetre;
        _this.numOfSwimmingPools = numOfSwimmingPools;
        return _this;
    }
    Vila.prototype.print = function () {
        console.log("This vila has " + this.numOfSwimmingPools + " swimming pools");
    };
    return Vila;
}(House));
export { Vila };
