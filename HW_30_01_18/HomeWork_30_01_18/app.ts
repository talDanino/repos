function createIFly(): IFly {
    let random: number = Math.round(Math.random() * (2 - 0)) + 0;
    if (random == 0) {
        let bird1: Bird = new Bird("birdType", 3, "blue");
        return bird1;
    }

    if (random == 1) {
        let airplane1: Airplane = new Airplane("Jhon", "Bryce", "Israel");
        return airplane1;
    }

    if (random == 2) {
        let kite1: Kite = new Kite("red", 20);
        return kite1;
    }
}

let IFlyArr: Array<IFly> = new Array<IFly>(10);

let i: number;

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


