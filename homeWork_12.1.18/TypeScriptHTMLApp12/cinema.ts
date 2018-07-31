class Cinema {

    public readonly openDaysInWeek: number = 7;  //primitive
    public cinemaName: string;

    public readonly manager: Manager = new Manager("Sean", 20, 20000);   //ref
    private _morningShift: Shift;
    private _nightShift: Shift;



    //ctor
    public constructor(cinemaName: string = "JB-Cinema") {
        this.cinemaName = cinemaName;
    }

    //actions
    public get morningShift(): Shift {
        return this._morningShift;
    }

    public set morningShift(x: Shift) {
        this._morningShift = x;
    }

    public get nightShift(): Shift {
        return this._nightShift;
    }

    public set nightShift(x: Shift) {
        this._nightShift = x;
    }


    private addShiftInfo(x: Array<Cashier>): string {
        let tempStr: string = "";
        for (let i: number = 0; i < x.length; i++) {
            tempStr += `cashier number ${i}: ${x[i].printInfo()}<br/>`;
        }
        return tempStr;
    }

    public getInfo(): string {




        let str: string = `cinemaName: ${this.cinemaName}<br/><br/>manager: ${this.manager.getInfo()}<br/>`;

        str += "<br/>morningShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.morningShift.cashierArr);


        str += "<br/>nightShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.nightShift.cashierArr);

        return str;
    }
}