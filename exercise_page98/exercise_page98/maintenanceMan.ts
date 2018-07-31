class MaintenaceMan {

    private _name: string;
    private _workerNum: number; //number of worker
    private _isBusy: boolean; 

    get name(): string {
        return this._name;
    }
    set name(n: string) {
        this._name = n;
    }

    get workerNum(): number {
        return this._workerNum;
    }
    set workerNum(w: number) {
        this._workerNum = w;
    }

    get isBusy(): boolean {
        return this._isBusy;
    }
    set isBusy(b: boolean) {
        this._isBusy = b;
    }

    constructor(name: string, workerNum: number, isBusy: boolean) {
        this._name = name;
        this._workerNum = workerNum;
        this._isBusy = isBusy;
    }
}