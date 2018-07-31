class Kite implements IFly {

    private _color: string;
    private _price: number; //positive number only

    public speed: number = 20;

    get color(): string {
        return this._color;
    }
    set color(c: string) {
        this._color = c;
    }

    get price(): number {
        return this._price;
    }
    set price(p: number) {
        this._price = p;
    }

    public fly(speed): void {
        document.write("speed kite: " + speed);
    }

    public land(): boolean {
        return false;
    }

    constructor(color: string, price: number) {
        this.color = color;
        this.price = price;
    }

    public toString() {
        return "color: " + this.color + ", price: " + this.price;
    }
}