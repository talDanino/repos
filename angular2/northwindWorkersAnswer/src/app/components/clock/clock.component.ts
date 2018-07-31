import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

    public currentTime: Date;

    constructor() { }

    // Third way to handle the "this":
    ngOnInit() {
        // Use arrow function which are just like inline function,
        // but their "this" is always our "this".
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
    }

    // // Second way to handle the "this":
    // ngOnInit() {
    //     // Bind the function "this" into our "this", so inside the inline funtion,
    //     // the "this" will be our "this".
    //     setInterval(function () {
    //         this.currentTime = new Date();
    //     }.bind(this), 1000);
    // }

    // First way to handle the "this":
    // ngOnInit() {
    //     // Save the current object ("this") into a local variable named "that",
    //     // so we can use "that" inside the inline function, becaue "this" inside the 
    //     // inline function will be the "window".
    //     let that = this; // that / thiz / me / _this
    //     setInterval(function () {
    //         that.currentTime = new Date();
    //     }, 1000);
    // }

}
