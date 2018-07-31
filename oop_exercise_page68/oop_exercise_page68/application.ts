class Application {

    private _appName: string;
    private _appPrice: number; // up to 0
    private _appSize: number; //positive number
    private _rating: number; //between 1 to 5

    get appName(): string {
        return this._appName;
    }
    set appName(name: string) {
        this._appName = name;
    }

    get appPrice(): number {
        return this._appPrice;
    }
    set appPrice(price: number) {
        if (price > 0)
            this._appPrice = price;
    }

    get appSize(): number {
        return this._appSize;
    }
    set appSize(size: number) {
        if (size > 0)
            this._appSize = size;
    }

    get rating(): number {
        return this._rating;
    }
    set rating(r: number) {
        if (r >= 1 && r <= 5)
            this._rating = r;
    }

    constructor(appName: string, appPrice?: number, appSize?: number, rating?: number) {

        this.appName = appName;

        if (this.appPrice == undefined)
            this.appPrice = 1;

        if (this.appSize == undefined)
            this.appSize = 1;

        if (this.rating == undefined)
            this.rating = 1;
    }

    public print(): void {
        document.write("application name: " + this.appName + ", price: " + this.appPrice +
            ", size: " + this.appSize + ", rating: " + this.rating);
    }

    public changePrice(percent: number) {
        if (percent >= 10 && percent <= 50)
            this.appPrice = this.appPrice - ((this.appPrice * percent) / 100);
    }

}