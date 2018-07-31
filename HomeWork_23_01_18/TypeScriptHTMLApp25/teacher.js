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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullName, age, id, male) {
        return _super.call(this, fullName, age, id, male) || this;
    }
    Object.defineProperty(Teacher.prototype, "teachingProfession", {
        get: function () {
            return this._teachingProfession;
        },
        set: function (p) {
            this._teachingProfession = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "teachingTime", {
        get: function () {
            return this._teachingTime;
        },
        set: function (t) {
            this._teachingTime = t;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("teaching profession: " + this.teachingProfession + ", time of teaching(in years): " + this.teachingTime + " ");
    };
    Teacher.prototype.toString = function () {
        return _super.prototype.toString.call(this) +
            ", teaching profession: " + this.teachingProfession + ", time of teaching(in years): " + this.teachingTime;
    };
    return Teacher;
}(Person));
//# sourceMappingURL=teacher.js.map