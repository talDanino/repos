var Student = /** @class */ (function () {
    function Student(name, avgGrade, email, age) {
        this.name = name;
        this.avgGrade = avgGrade;
        this.email = email;
        this.age = age;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "avgGrade", {
        get: function () {
            return this._avgGrade;
        },
        set: function (avg) {
            if (avg >= 0 && avg <= 100)
                this._avgGrade = avg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (e) {
            this._email = e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a >= 18 && a <= 80)
                this._age = a;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.print = function () {
        document.write("student name: " + this.name + ", avg grades: " + this.avgGrade + ", E-mail: " + this.email + ", age: " + this.age);
    };
    return Student;
}());
//# sourceMappingURL=student.js.map