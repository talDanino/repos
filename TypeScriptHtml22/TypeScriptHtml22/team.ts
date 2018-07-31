class Team {

    private _serialNum: number; // number of class- between 100 to 400
    private _teacher: Teacher;
    private _studentsArr: Student[];
    private _student: Student;
    private _maxStudents: number; // max of students in class- between 10 to 90


    get serialNum(): number {
        return this._serialNum;
    }
    set serialNum(s: number) {
        if (s >= 100 && s <= 400)
            this._serialNum = s;
    }

    get teacher(): Teacher {
        return this._teacher;
    }
    set teacher(t: Teacher) {
        this._teacher = t;
    }

    get studentsArr(): Student[] {
        return this._studentsArr;
    }
    set studentsArr(arr: Student[]) {
        this._studentsArr = arr;
    }

    get student(): Student {
        return this._student;
    }
    set student(s: Student) {
        this._student = s;
    }

    get maxStudents(): number {
        return this._maxStudents;
    }
    set maxStudents(max: number) {
        if (max >= 10 && max <= 90)
            this._maxStudents = max;
    }

    constructor(maxStudents: number=10) {

        this.maxStudents = maxStudents;
        this.studentsArr = new Array<Student>(this.maxStudents);
        
    }

    public printClassInfo(): void {

        document.write(`serial number of class: ${this.serialNum} <br/>`);
        this.teacher.print(); //call to object from "Teacher" class
        this.student.print() // call to objec from "Student" class
        document.write(`maxi number of student in class: ${this.maxStudents}`);
    }

    public addStudent(student: Student): void {

        if (this.studentsArr.length < this.maxStudents)
            this.studentsArr[this.studentsArr.length - 1] = student;
    }




}