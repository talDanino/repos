class Room {

    private _roomNum: number;
    private _maintenanceMan: MaintenaceMan();

    get roomNum(): number {
        return this._roomNum;
    }
    set roomNum(r: number) {
        this._roomNum = r;
    }

    get maintenanceMan(): MaintenaceMan {
        return this._maintenanceMan;
    }
    set maintenanceMan(m: MaintenaceMan) {
        this._maintenanceMan = m;
    }

    public printInfo(): void {
        document.write("room number: " + this.roomNum + "maintenance man: " + this.maintenanceMan);
    }

    //massage room is clean
    public cleanRoom(minutes: number): void {
        document.write("The room is clean! ")
    }


}