class cinema {

    private _movieName: string;
    private _price: number; //between 30 to 200
    private _studentPercent: number //discount percentage for student between 10 to 20 
    private _teacherPercent: number // discount percentage for teacher between 5 to 10 

    get movieName(): string {
        return this._movieName;
    }
    set movieName(name: string) {
        this._movieName = name;
    }

    get price(): number {
        return this._price;
    }
    set price(p: number) {
        if (p >= 30 && p <= 200)
            this._price = p;
    }

    get studentPercent(): number {
        return this._studentPercent;
    }
    set studentPercent(studentP: number) {
        if (studentP >= 10 && studentP <= 20)
            this._studentPercent = studentP;
    }

    get teacherPercent(): number {
        return this._teacherPercent;
    }
    set teacherPercent(teacherP: number) {
        if (teacherP >= 5 && teacherP <= 10)
            this._teacherPercent = teacherP;
    }

    constructor(movieName: string, price: number) {
        this.movieName = movieName;
        this.price = price;
        this.studentPercent = Math.round(Math.random() * (20 - 10) + 10);
        this.teacherPercent = Math.round(Math.random() * (10 - 5) + 5);
    }


}