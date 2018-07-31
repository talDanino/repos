var Person = /** @class */ (function () {
    function Person(fullName, age, id, male) {
        this.fullName = fullName;
        this.age = age;
        this.id = id;
        this.male = male;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a >= 0 && a <= 120)
                this._age = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (id.length == 9)
                this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "male", {
        get: function () {
            return this._male;
        },
        set: function (male) {
            this._male = male;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.print = function () {
        document.write("full name: " + this.fullName + ",  age: " + this.age + ", id: " + this.id + ",  male: " + this.male);
    };
    Person.prototype.toString = function () {
        return "full name: " + this.fullName + ",  age: " + this.age + ", id: " + this.id + ",  male: " + this.male;
    };
    return Person;
}());
//# sourceMappingURL=person.js.map