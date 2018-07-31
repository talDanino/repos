class Teacher {

    private _name: string;
    private _subjectSpecialization: string; //subject 

    get name(): string {
        return this._name;
    }
    set name(n: string) {
        this._name = n;
    }

    get subject(): string {
        return this._subjectSpecialization;
    }
    set subject(s: string) {
        if (s == "programming" || s == "history" || s == "physics" || s == "math")
            this._subjectSpecialization = s;
    }

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }

    public print(): void {
        document.write(`teacher name: ${this.name}, _subject specialization: ${this.subject} `);
    }
}