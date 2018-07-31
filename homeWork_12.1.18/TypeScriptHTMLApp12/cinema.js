var Cinema = /** @class */ (function () {
    //ctor
    function Cinema(cinemaName) {
        if (cinemaName === void 0) { cinemaName = "JB-Cinema"; }
        this.openDaysInWeek = 7; //primitive
        this.manager = new Manager("Sean", 20, 20000); //ref
        this.cinemaName = cinemaName;
    }
    Object.defineProperty(Cinema.prototype, "morningShift", {
        //actions
        get: function () {
            return this._morningShift;
        },
        set: function (x) {
            this._morningShift = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "nightShift", {
        get: function () {
            return this._nightShift;
        },
        set: function (x) {
            this._nightShift = x;
        },
        enumerable: true,
        configurable: true
    });
    Cinema.prototype.addShiftInfo = function (x) {
        var tempStr = "";
        for (var i = 0; i < x.length; i++) {
            tempStr += "cashier number " + i + ": " + x[i].printInfo() + "<br/>";
        }
        return tempStr;
    };
    Cinema.prototype.getInfo = function () {
        var str = "cinemaName: " + this.cinemaName + "<br/><br/>manager: " + this.manager.getInfo() + "<br/>";
        str += "<br/>morningShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.morningShift.cashierArr);
        str += "<br/>nightShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.nightShift.cashierArr);
        return str;
    };
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map