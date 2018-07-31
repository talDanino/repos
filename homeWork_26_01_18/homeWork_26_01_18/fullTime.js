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
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime(day, month, year, hour, minutes, seconds) {
        var _this = _super.call(this, day, month, year) || this;
        _this.hour = hour;
        _this.minutes = minutes;
        _this.seconds = seconds;
        return _this;
    }
    Object.defineProperty(FullTime.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (h) {
            if (h >= 0 && h <= 24)
                this._hour = h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (m) {
            if (m >= 0 && m <= 60)
                this._minutes = m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (s) {
            if (s >= 0 && s <= 60)
                this._seconds = s;
        },
        enumerable: true,
        configurable: true
    });
    FullTime.prototype.toString = function () {
        return "basic day: " + this.day + "/" + this.month + "/" + this.year +
            "<br/> time: " + this.hour + ":" + this.minutes + ":" + this.seconds;
    };
    return FullTime;
}(BasicDay));
//# sourceMappingURL=fullTime.js.map