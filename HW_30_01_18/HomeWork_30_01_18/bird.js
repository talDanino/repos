var Bird = /** @class */ (function () {
    function Bird(birdType, age, color) {
        this.speed = 15;
        this.birdType = birdType;
        this.age = age;
        this.color = color;
    }
    Object.defineProperty(Bird.prototype, "birdType", {
        get: function () {
            return this._birdType;
        },
        set: function (t) {
            this._birdType = t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a > 0)
                this._age = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (c) {
            this._color = c;
        },
        enumerable: true,
        configurable: true
    });
    Bird.prototype.fly = function (speed) {
        document.write("speed bird: " + speed);
    };
    Bird.prototype.land = function () {
        return true;
    };
    Bird.prototype.toString = function () {
        return "bird type: " + this.birdType + ", age: " + this.age + ", color: " + this.color;
    };
    return Bird;
}());
//# sourceMappingURL=bird.js.map