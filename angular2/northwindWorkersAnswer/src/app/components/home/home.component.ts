import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    public discount: number;
    public currentDate: Date;
    public imageWidth: number;
    public bananaStyle;
    public isSummer: boolean;
    public vegetables: string[];

    // Invokes when the HomeComponent object created.
    constructor(private pageTitle: Title) { } // DI = Dependency Injection for the Title object.

    // Invokes once after the view is created.
    ngOnInit() {
        this.discount = 7;
        this.currentDate = new Date();
        this.imageWidth = 200;
        this.bananaStyle = { "yellowish": true, "bold": true };

        let mm = this.currentDate.getMonth();
        this.isSummer = mm >= 5 && mm <= 9;

        this.vegetables = ["Tomatoes", "Carrots", "Onions", "Potatoes"];

        this.pageTitle.setTitle("Northwind Home");
    }

    public decrease(): void {
        if (this.imageWidth > 100) {
            this.imageWidth -= 10;
        }
    }

    public increase(): void {
        if (this.imageWidth < 300) {
            this.imageWidth += 10;
        }
    }

    public reset(): void {
        this.imageWidth = 200;
    }

    // Invokes once before the component destorys
    ngOnDestroy(): void {

    }

}
