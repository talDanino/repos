var Product = /** @class */ (function () {
    function Product(nameOfItem, price, expiryDate) {
        this.nameOfItem = nameOfItem;
        this.price = price;
        this.expiryDate = expiryDate;
    }
    Object.defineProperty(Product.prototype, "nameOfItem", {
        get: function () {
            return this._nameOfItem;
        },
        set: function (name) {
            this._nameOfItem = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            this._price = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "expiryDate", {
        get: function () {
            return this._expiryDate;
        },
        set: function (expiryDate) {
            this._expiryDate = expiryDate;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        return "name of product: " + this.nameOfItem + ", price: " + this.price + "<br/> full time: " +
            this.expiryDate.toString();
    };
    return Product;
}());
//# sourceMappingURL=product.js.map