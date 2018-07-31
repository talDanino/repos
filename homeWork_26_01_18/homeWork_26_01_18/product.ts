class Product {

    private _nameOfItem: string;
    private _price: number; //positive number
    private _expiryDate: FullTime;

    get nameOfItem(): string {
        return this._nameOfItem;
    }
    set nameOfItem(name: string) {
        this._nameOfItem = name;
    }

    get price(): number {
        return this._price;
    }
    set price(p: number) {
        this._price = p;
    }

    get expiryDate(): FullTime {
        return this._expiryDate;
    }
    set expiryDate(expiryDate: FullTime) {
        this._expiryDate = expiryDate;
    }

    constructor(nameOfItem: string, price: number, expiryDate: FullTime) {
        this.nameOfItem = nameOfItem;
        this.price = price;
        this.expiryDate = expiryDate;
    }

    public toString() {
        return "name of product: " + this.nameOfItem + ", price: " + this.price + "<br/> full time: " +
            this.expiryDate.toString()
    }

}