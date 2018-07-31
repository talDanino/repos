import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public currentYear: number;

    constructor() { }

    ngOnInit() {
        let d = new Date();
        this.currentYear = d.getFullYear();
    }

}
