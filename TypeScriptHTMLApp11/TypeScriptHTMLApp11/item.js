var Item = /** @class */ (function () {
    function Item(nameItem, price, kasher, maker, validity) {
        this.nameItem = nameItem;
        this.price = price;
        this.kasher = kasher;
        this.maker = maker;
        this.validity = validity;
    }
    //print
    Item.prototype.print = function () {
        document.write("item: " + this.nameItem + ", Price: " + this.price + ", kasher: " + this.kasher + ", maker: " + this.maker + ", validity: " + this.validity);
    };
    Item.prototype.checkYear = function (thisYear) {
        if (thisYear === void 0) { thisYear = 2018; }
        if (this.validity >= thisYear) {
            document.write("validity");
            return true;
        }
        else {
            document.write("not validity");
            return false;
        }
    };
    return Item;
}());
//# sourceMappingURL=item.js.map