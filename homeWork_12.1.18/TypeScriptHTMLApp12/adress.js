var Address = /** @class */ (function () {
    function Address(city, country, street, houseNumber) {
        this._city = city;
        this._country = country;
        this._street = street;
        this._houseNumber = houseNumber;
    }
    Address.prototype.getInfo = function () {
        return "city: " + this.city + ",    country: " + this.country + ",    street: " + this.street + ",    house number: " + this.houseNumber;
    };
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (city) {
            this._city = city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (country) {
            this._country = country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (street) {
            this._street = street;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "houseNumber", {
        get: function () {
            return this._houseNumber;
        },
        set: function (houseNumber) {
            if (houseNumber > 0)
                this._houseNumber = houseNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());
//# sourceMappingURL=adress.js.map