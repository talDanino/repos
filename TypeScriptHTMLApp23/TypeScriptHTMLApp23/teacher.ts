class Teacher extends Person {

    private _teachingProfession: string;
    private _teachingTime: number; // in years

    get teachingProfession(): string {
        return this._teachingProfession;
    }
    set teachingProfession(p: string) {
        this._teachingProfession = p;
    }

    get teachingTime(): number {
        return this._teachingTime;
    }
    set teachingTime(t: number) {
        this._teachingTime = t;
    }

    public constructor(fullName: string, age: number, id: string, male: boolean) {
        super(fullName, age, id, male);
    }

    public print(): void {
        super.print();
        document.write(`teaching profession: ${this.teachingProfession}, time of teaching(in years): ${this.teachingTime} `);
    }

}