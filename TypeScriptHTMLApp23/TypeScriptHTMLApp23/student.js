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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullName, age, id, male) {
        return _super.call(this, fullName, age, id, male) || this;
    }
    Object.defineProperty(Student.prototype, "institute", {
        get: function () {
            return this._institute;
        },
        set: function (i) {
            this._institute = i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "profession", {
        get: function () {
            return this._Profession;
        },
        set: function (p) {
            this._Profession = p;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("academic institution: " + this.institute + ", proffesion: " + this.profession + " ");
    };
    return Student;
}(Person));
//# sourceMappingURL=student.js.map