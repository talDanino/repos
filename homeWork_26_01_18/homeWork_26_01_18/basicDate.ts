class BasicDay {

    private _day: number; // 1-31
    private _month: number; //1-12
    private _year: number; //20-50

    get day(): number {
        return this._day;
    }
    set day(d: number) {
        if (d >= 1 && d <= 31)
            this._day = d;
    }

    get month(): number {
        return this._month;
    }
    set month(m: number) {
        if (m >= 1 && m <= 12)
            this._month = m;
    }

    get year(): number {
        return this._year;
    }
    set year(y: number) {
        if (y >= 2020 && y <= 2050)
            this._year = y;
    }

    constructor(day: number, month: number, year: number) {

        this.day = day;
        this.month = month;
        this.year = year;
    }
    
}