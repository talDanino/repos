import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {

    constructor() { }

  public getPizzas():Pizza[] {
      
        let pizzaArray = new Array<Pizza>();

        for(let i:number=0;i<100;i++){
            let diameter:number = Math.floor((Math.random() * 40) + 10);
            let slices:number = Math.floor((Math.random() * 6) + 3);
            let toppings:number = Math.floor(Math.random()*5);
            let price:number = diameter+(toppings*5);
            
            pizzaArray.push(new Pizza(diameter,slices,toppings,price));
        }
        return pizzaArray;
  }
}