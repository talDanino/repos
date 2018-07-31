class ConferenceRoom extends Room{

    private _microphone: boolean; //there is microphone
    private _stageSize: number; //The size of the stage
    private _projector: boolean; // There is projector

    get microphone(): boolean {
        return this._microphone;
    }
    set microphone(m: boolean) {
        this._microphone = m;
    }

    get stageSize(): number {
        return this._stageSize;
    }
    set stageSize(s: number) {
        this._stageSize = s;
    }

    get projector(): boolean {
        return this._projector;
    }
    set projector(p: boolean) {
        this._projector = p;
    }

    constructor(microphone: boolean, stageSize: number, projector: boolean) {
        super();
        this._microphone = microphone;
        this._stageSize = stageSize;
        this._projector = projector;
    }

    public printInfo(): void {
        super.printInfo() +
            "there is microphone: " + this.microphone + ", the size of the stage: " + this.stageSize
            + ", there is projector: " + this.projector;
    }

    public cleanConferenceRoom(): void {
        super.cleanRoom;
    }

    


}