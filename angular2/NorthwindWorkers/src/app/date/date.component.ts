import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{

    @Input()
    public dateStr:string; //yyyy-mm-dd
    public date:Date;

  constructor() { }

  ngOnInit() {
      let year = Number (this.dateStr.substr(0,4));
      let month = Number (this.dateStr.substr(5,2))-1;
      let day = Number (this.dateStr.substr(8,2));
      this.date=new Date(year,month,day);
  }

}
