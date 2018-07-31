class Bird implements IFly {

    private _birdType: string;
    private _age: number; //positive number only
    private _color: string;

    public speed: number = 15;

    get birdType(): string {
        return this._birdType;
    }
    set birdType(t: string) {
        this._birdType = t;
    }

    get age(): number {
        return this._age;
    }
    set age(a: number) {
        if (a > 0)
            this._age = a;
    }

    get color(): string {
        return this._color;
    }
    set color(c: string) {
        this._color = c;
    }


    public fly(speed): void {
        document.write("speed bird: " + speed);
    }

    public land(): boolean {
        return true;
    }

    constructor(birdType: string, age: number, color: string) {
        this.birdType = birdType;
        this.age = age;
        this.color = color;
    }

    public toString() {
        return "bird type: " + this.birdType + ", age: " + this.age + ", color: " + this.color;
    }

}