class Hotel {

    public readonly RoomsNumber: number = 30; //number of rooms in the hotel

    private _hotelName: string;
    private _roomArr: Array<Room> = new Array<Room>(this.RoomsNumber);
    private _ownerName: string; //Name of hotel owner

    get hotelName(): string {
        return this._hotelName;
    }
    set hotelName(hotel: string) {
        this._hotelName = hotel;
    }

    get roomArr(): Array<Room> {
        return this._roomArr;
    }
    set roomArr(room: Room[]) {
        this._roomArr = room;
    }

    get ownerName(): string {
        return this._ownerName;
    }
    set ownerName(owner: string) {
        this._ownerName = owner;
    }

    constructor(hotelName: string, roomArr: Array<Room>, ownerName: string) {
        this.hotelName = hotelName;
        this.roomArr = roomArr;
        this.ownerName = ownerName;
    }

    public searchRoom(roomNumber: number): void {
        let i: number;
        for (i = 0; i < 30; i++) {
            if (i == roomNumber) {
                document.write("")
            }
        }
    }

}