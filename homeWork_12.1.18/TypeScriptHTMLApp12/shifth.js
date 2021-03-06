var Shift = /** @class */ (function () {
    function Shift(startTimeParam, endTimeParam, numOfCashiersParam) {
        if (startTimeParam === void 0) { startTimeParam = 10; }
        if (endTimeParam === void 0) { endTimeParam = 18; }
        if (numOfCashiersParam === void 0) { numOfCashiersParam = 3; }
        this.startTime = startTimeParam;
        this.endTime = endTimeParam;
        this.numOfCashiers = numOfCashiersParam;
    }
    Object.defineProperty(Shift.prototype, "cashierArr", {
        /////////set + get for private array
        get: function () {
            return this._cashierArr;
        },
        set: function (arr) {
            this._cashierArr = arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "startTime", {
        /////////set + get for private members
        get: function () {
            return this._startTime;
        },
        set: function (num) {
            if (num >= 0 && num <= 24) {
                this._startTime = num;
            }
            else {
                this._startTime = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (num) {
            if (num >= 0 && num <= 24) {
                this._endTime = num;
            }
            else {
                this._endTime = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "numOfCashiers", {
        get: function () {
            return this._numOfCashiers;
        },
        set: function (num) {
            if (num >= 3 && num <= 20) {
                this._numOfCashiers = num;
            }
            else {
                this._numOfCashiers = 3;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Shift;
}());
//# sourceMappingURL=shifth.js.map