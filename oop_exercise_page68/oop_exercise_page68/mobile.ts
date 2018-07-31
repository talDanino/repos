class Mobile {

    private _versionNum: number; //version of phone
    private _isAndroid: boolean;
    private _memorySize: number; //memory size of phone number
    private _appArray: Application[]; //array of application


    get versionNum(): number {
        return this._versionNum;
    }
    set versionNum(v: number) {
        this._versionNum = v;
    }

    get isAndroid(): boolean {
        return this._isAndroid;
    }
    set isAndroid(a: boolean) {
        this._isAndroid = a;
    }

    get memorySize(): number {
        return this._memorySize;
    }
    set memorySize(m: number) {
        this._memorySize = m;
    }

    get appArray(): Application[] {
        return this._appArray;
    }
    set appArray(a: Application[]) {
        this._appArray = a;
    }

    constructor(versionNum: number, isAndroid: boolean, memorySize: number) {
        this.versionNum = versionNum;
        this.isAndroid = isAndroid;
        this.memorySize = memorySize;
        this.appArray = new Array<Application>(); //reset array
    }

    public printMobileInfo(): void {

        document.write("phone number version: " + this.versionNum + ", android: " + this.isAndroid +
            ", memory size: " + this.memorySize +
            ", <br/>  application list: " + this.appArray);
    }


    public isMemoryFull(): boolean {
        let i: number = 0;
        let sumSize: number = 0;
        for (i = 0; i < this.appArray.length; i++) {
            sumSize = sumSize + this.appArray[i].appSize;
        }

        if (sumSize >= this.memorySize) {
            return true; //memory size full
        }
        else {
            return false; //memory size not full
        }

    }

}