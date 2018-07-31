var arrItem = new Array(5);
var i;
arrItem[0] = new Item("Hamburger", 40, true, "America", 2017);
arrItem[1] = new Item("Ice cream", 17, true, "Italy", 2019);
arrItem[2] = new Item("Pizza", 20, true, "Italy", 2020);
arrItem[3] = new Item("Sushi", 32, false, "Chaina", 2016);
arrItem[4] = new Item("Fish", 70, false, "Greece", 2019);
for (i = 0; i < 5; i++) {
    arrItem[i].print();
    document.write("<br/>");
    arrItem[i].checkYear(this.validity);
    document.write("<br/> <br/>");
}
//# sourceMappingURL=app.js.map