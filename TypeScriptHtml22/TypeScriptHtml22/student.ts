class Student {

    private _name: string;
    private _avgGrade: number; //average for one year. between 0 to 100
    private _email: string; 
    private _age: number // between 18 to 80

    get name(): string {
        return this._name;
    }
    set name(n: string) {
        this._name = n;
    }

    get avgGrade(): number {
        return this._avgGrade;
    }
    set avgGrade(avg: number) {
        if (avg >= 0 && avg <= 100)
            this._avgGrade = avg;
    }

    get email(): string {
        return this._email;
    }
    set email(e: string) {
        this._email = e;
    }

    get age(): number {
        return this._age;
    }
    set age(a: number) {
        if (a >= 18 && a <= 80)
            this._age = a;
    }

    constructor(name: string, avgGrade: number, email: string, age: number) {
        this.name = name;
        this.avgGrade = avgGrade;
        this.email = email;
        this.age = age;
    }

    public print(): void {
        document.write(`student name: ${this.name}, avg grades: ${this.avgGrade}, E-mail: ${this.email}, age: ${this.age}`);
    }

}