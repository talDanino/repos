var Kite = /** @class */ (function () {
    function Kite(color, price) {
        this.speed = 20;
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Kite.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (c) {
            this._color = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            this._price = p;
        },
        enumerable: true,
        configurable: true
    });
    Kite.prototype.fly = function (speed) {
        document.write("speed kite: " + speed);
    };
    Kite.prototype.land = function () {
        return false;
    };
    Kite.prototype.toString = function () {
        return "color: " + this.color + ", price: " + this.price;
    };
    return Kite;
}());
//# sourceMappingURL=kite.js.map