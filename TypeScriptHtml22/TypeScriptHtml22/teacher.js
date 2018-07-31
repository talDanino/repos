var Teacher = /** @class */ (function () {
    function Teacher(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    Object.defineProperty(Teacher.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subjectSpecialization;
        },
        set: function (s) {
            if (s == "programming" || s == "history" || s == "physics" || s == "math")
                this._subjectSpecialization = s;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.print = function () {
        document.write("teacher name: " + this.name + ", _subject specialization: " + this.subject + " ");
    };
    return Teacher;
}());
//# sourceMappingURL=teacher.js.map