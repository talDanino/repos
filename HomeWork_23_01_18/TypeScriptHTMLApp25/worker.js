var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Worker1 = /** @class */ (function (_super) {
    __extends(Worker1, _super);
    function Worker1(fullName, age, id, male) {
        return _super.call(this, fullName, age, id, male) || this;
    }
    Object.defineProperty(Worker1.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (s) {
            if (s > 0)
                this._salary = s;
        },
        enumerable: true,
        configurable: true
    });
    Worker1.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("salary " + this.salary);
    };
    Worker1.prototype.toString = function () {
        return _super.prototype.toString.call(this) +
            ", salary: " + this.salary;
    };
    return Worker1;
}(Person));
//# sourceMappingURL=worker.js.map