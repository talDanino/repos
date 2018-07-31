class Airplane implements IFly {

    private _pilotName: string;
    private _airlineName: string;
    private _target: string; //יעד

    public speed: number = 340;


    get pilotName(): string {
        return this._pilotName;
    }
    set pilotName(pilot: string) {
        this._pilotName = pilot;
    }

    get airlineName(): string {
        return this._airlineName;
    }
    set airlineName(airline: string) {
        this._airlineName = airline;
    }

    get target(): string {
        return this._target;
    }
    set target(t: string) {
        this._target = t;
    }

    public fly(speed): void {
        document.write("speed airplane: " + speed);
    }

    public land(): boolean {
        return true;
    }

    constructor(pilotName: string, airlineName: string, target: string) {
        this.pilotName = pilotName;
        this.airlineName = airlineName;
        this.target = target;
    }

    public toString() {
        return "pilot name: " + this.pilotName + ", airline name: " + this.airlineName
            + ", target: " + this.target;
    }

}