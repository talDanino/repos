var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuiteRoom = /** @class */ (function (_super) {
    __extends(SuiteRoom, _super);
    function SuiteRoom(bedNum, jacuzziSize) {
        var _this = _super.call(this) || this;
        _this.bedNum = bedNum;
        _this._jacuzziSize = jacuzziSize;
        return _this;
    }
    Object.defineProperty(SuiteRoom.prototype, "bedNum", {
        get: function () {
            return this._bedNum;
        },
        set: function (b) {
            this._bedNum = b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiteRoom.prototype, "jacuzziSize", {
        get: function () {
            return this._jacuzziSize;
        },
        set: function (j) {
            this._jacuzziSize = j;
        },
        enumerable: true,
        configurable: true
    });
    SuiteRoom.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("<br/> number of beds: " + this.bedNum + ", jacuzzi size: " + this.jacuzziSize);
    };
    SuiteRoom.prototype.cleanSuiteRoom = function () {
        _super.prototype.cleanRoom;
    };
    return SuiteRoom;
}(Room));
//# sourceMappingURL=suiteRoom.js.map