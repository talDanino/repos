var Hotel = /** @class */ (function () {
    function Hotel(hotelName, roomArr, ownerName) {
        this.RoomsNumber = 30; //number of rooms in the hotel
        this._roomArr = new Array(this.RoomsNumber);
        this.hotelName = hotelName;
        this.roomArr = roomArr;
        this.ownerName = ownerName;
    }
    Object.defineProperty(Hotel.prototype, "hotelName", {
        get: function () {
            return this._hotelName;
        },
        set: function (hotel) {
            this._hotelName = hotel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "roomArr", {
        get: function () {
            return this._roomArr;
        },
        set: function (room) {
            this._roomArr = room;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (owner) {
            this._ownerName = owner;
        },
        enumerable: true,
        configurable: true
    });
    Hotel.prototype.searchRoom = function (roomNumber) {
        var i;
        for (i = 0; i < 30; i++) {
            if (i == roomNumber) {
                document.write("");
            }
        }
    };
    return Hotel;
}());
//# sourceMappingURL=hotel.js.map