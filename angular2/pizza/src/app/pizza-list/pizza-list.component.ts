import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaServiceService } from '../pizza-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

    public pizzas:Pizza[];

  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit() {
        this.pizzas = this.pizzaService.getPizzas();
        
    }

}
