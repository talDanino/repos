var cinema = /** @class */ (function () {
    function cinema(movieName, price) {
        this.movieName = movieName;
        this.price = price;
        this.studentPercent = Math.round(Math.random() * (20 - 10) + 10);
        this.teacherPercent = Math.round(Math.random() * (10 - 5) + 5);
    }
    Object.defineProperty(cinema.prototype, "movieName", {
        get: function () {
            return this._movieName;
        },
        set: function (name) {
            this._movieName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cinema.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            if (p >= 30 && p <= 200)
                this._price = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cinema.prototype, "studentPercent", {
        get: function () {
            return this._studentPercent;
        },
        set: function (studentP) {
            if (studentP >= 10 && studentP <= 20)
                this._studentPercent = studentP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cinema.prototype, "teacherPercent", {
        get: function () {
            return this._teacherPercent;
        },
        set: function (teacherP) {
            if (teacherP >= 5 && teacherP <= 10)
                this._teacherPercent = teacherP;
        },
        enumerable: true,
        configurable: true
    });
    return cinema;
}());
//# sourceMappingURL=cinema.js.map