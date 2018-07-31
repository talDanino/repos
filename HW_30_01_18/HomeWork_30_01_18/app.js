function createIFly() {
    var random = Math.round(Math.random() * (2 - 0)) + 0;
    if (random == 0) {
        var bird1 = new Bird("birdType", 3, "blue");
        return bird1;
    }
    if (random == 1) {
        var airplane1 = new Airplane("Jhon", "Bryce", "Israel");
        return airplane1;
    }
    if (random == 2) {
        var kite1 = new Kite("red", 20);
        return kite1;
    }
}
var IFlyArr = new Array(10);
var i;
for (i = 0; i < IFlyArr.length; i++) {
    IFlyArr[i] = createIFly();
}
for (i = 0; i < IFlyArr.length; i++) {
    if (IFlyArr[i] instanceof Bird) {
        IFlyArr[i].fly;
        IFlyArr[i].land;
    }
    if (IFlyArr[i] instanceof Kite) {
        IFlyArr[i].fly;
        IFlyArr[i].land;
    }
    if (IFlyArr[i] instanceof Airplane) {
        IFlyArr[i].fly;
        IFlyArr[i].land;
    }
}
document.write(IFlyArr.toString());
//# sourceMappingURL=app.js.map