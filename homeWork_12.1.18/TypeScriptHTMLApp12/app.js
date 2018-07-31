var cinema1 = new Cinema();
var manager1 = new Manager();
var address1 = new Address("yavne  ", "israel  ", "adad  ", 52);
manager1.address = address1;
document.write(manager1.address.getInfo());
cinema1.morningShift = new Shift();
cinema1.morningShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Bob"), new Cashier(23, cinema1.cinemaName, "Alice"), new Cashier(27, cinema1.cinemaName, "Clarc"));
cinema1.nightShift = new Shift(18, 0, 4);
cinema1.nightShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Anna"), new Cashier(23, cinema1.cinemaName, "Netanel"), new Cashier(27, cinema1.cinemaName, "Boris"), new Cashier(27, cinema1.cinemaName, "Yaniv"));
document.write("<br/>");
document.write("<br/>");
//ok - we can reed the value of a redonly property
document.write("cinema1.openDaysInWeek: " + cinema1.openDaysInWeek + "<br/>");
//Left- hand side of assignment expression cannot be a constant or a read- only property.
//cinema1.openDaysInWeek = 6;  //-->error
//Left- hand side of assignment expression cannot be a constant or a read- only property.
//cinema1.manager = new Manager();   //-->error
//ok - we can reed the value of a redonly property
document.write("before change: cinema1.manager.age: " + cinema1.manager.age + "<br/>"); //-->20
cinema1.manager.age = 22;
//ok - we can reed the value of a redonly property
document.write("after change: cinema1.manager.age: " + cinema1.manager.age + "<br/>"); //-->22
document.write(cinema1.getInfo());
console.log(cinema1.getInfo());
console.log(cinema1);
//# sourceMappingURL=app.js.map