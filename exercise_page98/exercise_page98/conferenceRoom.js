var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConferenceRoom = /** @class */ (function (_super) {
    __extends(ConferenceRoom, _super);
    function ConferenceRoom(microphone, stageSize, projector) {
        var _this = _super.call(this) || this;
        _this._microphone = microphone;
        _this._stageSize = stageSize;
        _this._projector = projector;
        return _this;
    }
    Object.defineProperty(ConferenceRoom.prototype, "microphone", {
        get: function () {
            return this._microphone;
        },
        set: function (m) {
            this._microphone = m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConferenceRoom.prototype, "stageSize", {
        get: function () {
            return this._stageSize;
        },
        set: function (s) {
            this._stageSize = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConferenceRoom.prototype, "projector", {
        get: function () {
            return this._projector;
        },
        set: function (p) {
            this._projector = p;
        },
        enumerable: true,
        configurable: true
    });
    ConferenceRoom.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this) +
            "there is microphone: " + this.microphone + ", the size of the stage: " + this.stageSize
            + ", there is projector: " + this.projector;
    };
    ConferenceRoom.prototype.cleanConferenceRoom = function () {
        _super.prototype.cleanRoom;
    };
    return ConferenceRoom;
}(Room));
//# sourceMappingURL=conferenceRoom.js.map