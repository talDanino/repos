var Team = /** @class */ (function () {
    function Team(maxStudents) {
        if (maxStudents === void 0) { maxStudents = 10; }
        this.maxStudents = maxStudents;
        this.studentsArr = new Array(this.maxStudents);
    }
    Object.defineProperty(Team.prototype, "serialNum", {
        get: function () {
            return this._serialNum;
        },
        set: function (s) {
            if (s >= 100 && s <= 400)
                this._serialNum = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        set: function (t) {
            this._teacher = t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "studentsArr", {
        get: function () {
            return this._studentsArr;
        },
        set: function (arr) {
            this._studentsArr = arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "student", {
        get: function () {
            return this._student;
        },
        set: function (s) {
            this._student = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "maxStudents", {
        get: function () {
            return this._maxStudents;
        },
        set: function (max) {
            if (max >= 10 && max <= 90)
                this._maxStudents = max;
        },
        enumerable: true,
        configurable: true
    });
    Team.prototype.printClassInfo = function () {
        document.write("serial number of class: " + this.serialNum + " <br/>");
        this.teacher.print(); //call to object from "Teacher" class
        this.student.print(); // call to objec from "Student" class
        document.write("maxi number of student in class: " + this.maxStudents);
    };
    Team.prototype.addStudent = function (student) {
        if (this.studentsArr.length < this.maxStudents)
            this.studentsArr[this.studentsArr.length - 1] = student;
    };
    return Team;
}());
//# sourceMappingURL=team.js.map