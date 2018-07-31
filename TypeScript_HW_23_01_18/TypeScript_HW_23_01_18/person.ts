class Person {

    private _fullName: string;
    private _age: number; // between 0-120
    private _id: string; //only numbers, 9 chars
    private _male: boolean; // male/female

    get fullName(): string {
        return this._fullName;
    }
    set fullName(name: string) {
        this._fullName = name;
    }

    get age(): number {
        return this._age;
    }
    set age(a: number) {
        if (a >= 0 && a <= 120)
            this._age = a;
    }

    get id(): string {
        return this._id;
    }
    set id(id: string) {
        if (id.length == 9) 
            this._id = id;
    }

    get male(): boolean {
        return this._male;
    }
    set male(male: boolean) {
        this._male = male;
    }

    constructor(fullName: string, age: number, id: string, male: boolean) {

        this.fullName = fullName;
        this.age = age;
        this.id = id;
        this.male = male;
    }

    public print(): void {

        document.write(`full name: ${this.fullName},  age: ${this.age}, id: ${this.id},  male: ${this.male}`);
    }

}