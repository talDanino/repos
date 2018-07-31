var Application = /** @class */ (function () {
    function Application(appName, appPrice, appSize, rating) {
        this.appName = appName;
        if (this.appPrice == undefined)
            this.appPrice = 1;
        if (this.appSize == undefined)
            this.appSize = 1;
        if (this.rating == undefined)
            this.rating = 1;
    }
    Object.defineProperty(Application.prototype, "appName", {
        get: function () {
            return this._appName;
        },
        set: function (name) {
            this._appName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "appPrice", {
        get: function () {
            return this._appPrice;
        },
        set: function (price) {
            if (price > 0)
                this._appPrice = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "appSize", {
        get: function () {
            return this._appSize;
        },
        set: function (size) {
            if (size > 0)
                this._appSize = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (r) {
            if (r >= 1 && r <= 5)
                this._rating = r;
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.print = function () {
        document.write("application name: " + this.appName + ", price: " + this.appPrice +
            ", size: " + this.appSize + ", rating: " + this.rating);
    };
    Application.prototype.changePrice = function (percent) {
        if (percent >= 10 && percent <= 50)
            this.appPrice = this.appPrice - ((this.appPrice * percent) / 100);
    };
    return Application;
}());
//# sourceMappingURL=application.js.map