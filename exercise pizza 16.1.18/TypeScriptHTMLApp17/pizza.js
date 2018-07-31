var pizza = /** @class */ (function () {
    function pizza(diameter, slices, toppings) {
        if (diameter === void 0) { diameter = Math.round(Math.random() * (50 - 40) + 40); }
        if (slices === void 0) { slices = Math.round(Math.random() * (8 - 1) + 1); }
        if (toppings === void 0) { toppings = Math.random() * (5 - 0) + 0; }
        this.diameter = diameter;
        this.slices = slices;
        this.toppings = toppings;
    }
    Object.defineProperty(pizza.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (diameter) {
            if (diameter >= 10 && diameter <= 50)
                this._diameter = diameter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pizza.prototype, "slices", {
        get: function () {
            return this._slices;
        },
        set: function (slices) {
            if (slices >= 1 && slices <= 8)
                this._slices = slices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pizza.prototype, "toppings", {
        get: function () {
            return this._toppings;
        },
        set: function (toppings) {
            if (toppings >= 0 && toppings <= 5)
                this._toppings = toppings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pizza.prototype, "sumOfToppings", {
        // static object
        get: function () {
            return pizza._sumOfToppings;
        },
        set: function (sumOfToppings) {
            if (sumOfToppings >= 0)
                pizza._sumOfToppings = sumOfToppings;
        },
        enumerable: true,
        configurable: true
    });
    pizza.prototype.isBasicPizza = function () {
        if (this.toppings == 0)
            return false;
        return true;
    };
    pizza.prototype.print = function () {
        return "diameter: " + this.diameter + ", slices: " + this.slices + ", toppings: " + this.toppings + " ";
    };
    pizza._sumOfToppings = 0; //סכום התוספות שהוזמנו מכל הפיצות 
    return pizza;
}());
//# sourceMappingURL=pizza.js.map