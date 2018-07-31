export class Pizza{

    public Diameter:number; //קוטר 
    public Slices:number; //מספר משולשים
    public Toppings:number; //מספר תוספות
    public Price:number=this.Diameter+(this.Toppings*5); 

    public constructor(diameter:number, slices:number, toppings:number, price:number){
        this.Diameter=diameter;
        this.Slices=slices;
        this.Toppings=toppings;
        this.Price=price;
    }
}