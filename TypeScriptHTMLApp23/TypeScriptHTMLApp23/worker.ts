class Worker1 extends Person {

    private _salary: number;

    get salary(): number {
        return this.salary;
    }
    set salary(s: number) {
        if (s < 0)
            this._salary = s;
    }

    public constructor(fullName: string, age: number, id: string, male: boolean) {
        super(fullName, age, id, male);
    }

    public print(): void {
        super.print();
        document.write(`salary ${this.salary}`);
    }
}