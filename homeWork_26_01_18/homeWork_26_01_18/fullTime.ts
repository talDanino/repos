class FullTime extends BasicDay {

    private _hour: number;//0-24
    private _minutes: number;//0-60
    private _seconds: number;//0-60

    get hour(): number {
        return this._hour;
    }
    set hour(h: number) {
        if (h >= 0 && h <= 24)
            this._hour = h;
    }

    get minutes(): number {
        return this._minutes;
    }
    set minutes(m: number) {
        if (m >= 0 && m <= 60)
            this._minutes = m;
    }

    get seconds(): number {
        return this._seconds;
    }
    set seconds(s: number) {
        if (s >= 0 && s <= 60)
            this._seconds = s;
    }

    constructor(day: number, month: number, year: number, hour: number, minutes: number, seconds: number) {
        super(day, month, year);
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public toString() {
        return "basic day: " + this.day + "/" + this.month + "/" + this.year +
            "<br/> time: " + this.hour + ":" + this.minutes + ":" + this.seconds;
    }

}