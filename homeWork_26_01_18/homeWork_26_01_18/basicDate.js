var BasicDay = /** @class */ (function () {
    function BasicDay(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Object.defineProperty(BasicDay.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (d) {
            if (d >= 1 && d <= 31)
                this._day = d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDay.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (m) {
            if (m >= 1 && m <= 12)
                this._month = m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDay.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (y) {
            if (y >= 2020 && y <= 2050)
                this._year = y;
        },
        enumerable: true,
        configurable: true
    });
    return BasicDay;
}());
//# sourceMappingURL=basicDate.js.map