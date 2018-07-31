var MaintenaceMan = /** @class */ (function () {
    function MaintenaceMan(name, workerNum, isBusy) {
        this._name = name;
        this._workerNum = workerNum;
        this._isBusy = isBusy;
    }
    Object.defineProperty(MaintenaceMan.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaintenaceMan.prototype, "workerNum", {
        get: function () {
            return this._workerNum;
        },
        set: function (w) {
            this._workerNum = w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaintenaceMan.prototype, "isBusy", {
        get: function () {
            return this._isBusy;
        },
        set: function (b) {
            this._isBusy = b;
        },
        enumerable: true,
        configurable: true
    });
    return MaintenaceMan;
}());
//# sourceMappingURL=maintenanceMan.js.map