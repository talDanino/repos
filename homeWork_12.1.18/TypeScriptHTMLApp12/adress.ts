class Address {
    private _city: string;
    private _country: string;
    private _street: string;
    private _houseNumber: number;


    constructor(city: string, country: string, street: string, houseNumber: number)
    {
        this._city = city;
        this._country = country;
        this._street = street;
        this._houseNumber = houseNumber;
    }

    public getInfo(): string {
        return `city: ${this.city},    country: ${this.country},    street: ${this.street},    house number: ${this.houseNumber}`
    }

    get city(): string {
        return this._city;
    }
    set city(city: string) {
        this._city = city;
    }


    get country(): string {
        return this._country;
    }
    set country(country: string) {
        this._country = country;
    }


    get street(): string {
        return this._street;
    }
    set street(street: string) {
        this._street = street;
    }


    get houseNumber(): number {
        return this._houseNumber;
    }
    set houseNumber(houseNumber: number) {
        if (houseNumber > 0)
            this._houseNumber = houseNumber;
    }
    

}