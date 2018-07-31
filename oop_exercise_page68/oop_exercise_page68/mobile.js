var Mobile = /** @class */ (function () {
    function Mobile(versionNum, isAndroid, memorySize) {
        this.versionNum = versionNum;
        this.isAndroid = isAndroid;
        this.memorySize = memorySize;
        this.appArray = new Array(); //reset array
    }
    Object.defineProperty(Mobile.prototype, "versionNum", {
        get: function () {
            return this._versionNum;
        },
        set: function (v) {
            this._versionNum = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "isAndroid", {
        get: function () {
            return this._isAndroid;
        },
        set: function (a) {
            this._isAndroid = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "memorySize", {
        get: function () {
            return this._memorySize;
        },
        set: function (m) {
            this._memorySize = m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "appArray", {
        get: function () {
            return this._appArray;
        },
        set: function (a) {
            this._appArray = a;
        },
        enumerable: true,
        configurable: true
    });
    Mobile.prototype.printMobileInfo = function () {
        document.write("phone number version: " + this.versionNum + ", android: " + this.isAndroid +
            ", memory size: " + this.memorySize +
            ", <br/>  application list: " + this.appArray);
    };
    Mobile.prototype.isMemoryFull = function () {
        var i = 0;
        var sumSize = 0;
        for (i = 0; i < this.appArray.length; i++) {
            sumSize = sumSize + this.appArray[i].appSize;
        }
        if (sumSize >= this.memorySize) {
            return true; //memory size full
        }
        else {
            return false; //memory size not full
        }
    };
    return Mobile;
}());
//# sourceMappingURL=mobile.js.map