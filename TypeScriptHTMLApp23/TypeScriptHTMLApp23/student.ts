class Student extends Person {

    private _institute: string; // academic institution
    private _Profession: string; //Specialty

    get institute(): string {
        return this._institute;
    }
    set institute(i: string) {
        this._institute = i;
    }

    get profession(): string {
        return this._Profession;
    }
    set profession(p: string) {
        this._Profession = p;
    }

    public constructor(fullName: string, age: number, id: string, male: boolean) {
        super(fullName, age, id, male);
    }
    

    public print(): void {
        super.print();
        document.write(`academic institution: ${this.institute}, proffesion: ${this.profession} `);
    }

}