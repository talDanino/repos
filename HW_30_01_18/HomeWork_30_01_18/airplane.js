var Airplane = /** @class */ (function () {
    function Airplane(pilotName, airlineName, target) {
        this.speed = 340;
        this.pilotName = pilotName;
        this.airlineName = airlineName;
        this.target = target;
    }
    Object.defineProperty(Airplane.prototype, "pilotName", {
        get: function () {
            return this._pilotName;
        },
        set: function (pilot) {
            this._pilotName = pilot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "airlineName", {
        get: function () {
            return this._airlineName;
        },
        set: function (airline) {
            this._airlineName = airline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (t) {
            this._target = t;
        },
        enumerable: true,
        configurable: true
    });
    Airplane.prototype.fly = function (speed) {
        document.write("speed airplane: " + speed);
    };
    Airplane.prototype.land = function () {
        return true;
    };
    Airplane.prototype.toString = function () {
        return "pilot name: " + this.pilotName + ", airline name: " + this.airlineName
            + ", target: " + this.target;
    };
    return Airplane;
}());
//# sourceMappingURL=airplane.js.map