let pizza1: pizza = new pizza(40,2,0);
let pizza2: pizza = new pizza(30, , 1);
let pizza3: pizza = new pizza(50,7,4);
let pizza4: pizza = new pizza(45,8,2);
let pizza5: pizza = new pizza(27, 4, 3);

document.write(pizza1.print());
document.write("<br/>");
document.write("toppings: " + pizza1.isBasicPizza());
document.write("<br/> <br/>");
document.write("<br/>");

document.write(pizza2.print() + "");
document.write("<br/>");
document.write("toppings: " + pizza2.isBasicPizza());
document.write("<br/>");
document.write("<br/>");

document.write(pizza3.print() + "");
document.write("<br/>");
document.write("toppings: " + pizza3.isBasicPizza());
document.write("<br/>");
document.write("<br/>");

document.write(pizza4.print() + "");
document.write("<br/>");
document.write("toppings: " + pizza4.isBasicPizza());
document.write("<br/>");
document.write("<br/>");

document.write(pizza5.print() + "");
document.write("<br/>");
document.write("toppings: " + pizza5.isBasicPizza());
document.write("<br/>");
document.write("<br/>");