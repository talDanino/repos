class pizza {
    private _diameter: number; //קוטר בין 10 ל50
    private _slices: number; // מספר משולשים בין 1 ל8
    private _toppings: number; //מספר תוספות בין 0 ל5
    private static _sumOfToppings: number = 0; //סכום התוספות שהוזמנו מכל הפיצות 

    get diameter(): number {
        return this._diameter;
    }
    set diameter(diameter: number) {
        if (diameter >= 10 && diameter <= 50)
            this._diameter = diameter;
    }

    get slices(): number {
        return this._slices;
    }
    set slices(slices: number) {
        if (slices >= 1 && slices <= 8)
            this._slices = slices;
    }

    get toppings(): number {
        return this._toppings;
    }
    set toppings(toppings: number) {
        if (toppings >= 0 && toppings <= 5)
            this._toppings = toppings;
    }
    
    // static object
    get sumOfToppings(): number {
        return pizza._sumOfToppings;
    }
    set sumOfToppings(sumOfToppings: number) {
        if (sumOfToppings >= 0)
            pizza._sumOfToppings = sumOfToppings;
    }
    
    
    
    

    public constructor(diameter: number = Math.round(Math.random() * (50 - 40) + 40), slices: number = Math.round(Math.random() * (8 - 1) + 1), toppings: number = Math.random() * (5 - 0) + 0) {
        this.diameter = diameter;
        this.slices = slices;
        this.toppings = toppings;
    }
    
    public isBasicPizza(): boolean {
        if (this.toppings == 0)
            return false;
        return true;
    }
    
    public print(): string {
        return `diameter: ${this.diameter}, slices: ${this.slices}, toppings: ${this.toppings} `
    }
    

}