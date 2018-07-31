class SuiteRoom extends Room {

    private _bedNum: number; //number of beds
    private _jacuzziSize: number; 

    get bedNum(): number {
        return this._bedNum;
    }
    set bedNum(b: number) {
        this._bedNum = b;
    }

    get jacuzziSize(): number {
        return this._jacuzziSize;
    }
    set jacuzziSize(j: number) {
        this._jacuzziSize = j;
    }

    constructor(bedNum: number, jacuzziSize: number) {
        super();
        this.bedNum = bedNum;
        this._jacuzziSize = jacuzziSize;
    }

    public printInfo() {
        super.printInfo();
        document.write("<br/> number of beds: " + this.bedNum + ", jacuzzi size: " + this.jacuzziSize);
    }

    public cleanSuiteRoom(): void {
        super.cleanRoom;
    }
}