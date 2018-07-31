class Manager {

    //data members
    public fullName: string;
    private _age: number;
    private _salary: number;
    private _address: Address;

    //ctor
    public constructor(fullName?: string, age?: number, salary?: number, address?: Address) {
        this.fullName = fullName;
        this.age = age;
        this.salary = salary;
        this.address = address;

    }
     

    //actions

    public getInfo(): string {
        let str: string = `fullName:${this.fullName}, age: ${this.age}, salary: ${this.salary}`;
        return str;
    }
    get age(): number {
        return this._age;
    }

    set age(x: number) {
        if (x >= 20 && x <= 120) {
            this._age = x;
        }
        else {
            this._age = 20;
        }
    }

    get salary(): number {
        return this._salary;
    }


    set salary(x: number) {
        if (x >= 20000) {
            this._salary = x;
        }
        else {
            this._salary = 20000;
        }
    }

    set address(x: Address) {
        this._address = x;
    }

    get address(): Address {
        return this._address;
    }
}