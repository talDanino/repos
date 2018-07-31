import { Component, OnInit } from '@angular/core';
import { UrlService } from '../shared/services/UrlData.service';

@Component({
  selector: 'app-countryries-list',
  templateUrl: './countryries-list.component.html',
  styleUrls: ['./countryries-list.component.css']
})
export class CountryriesListComponent implements OnInit {

  LocalUrlInfo:any;


  user_text:string="enter your string";

  constructor(private myUrlService:UrlService) {
    this.LocalUrlInfo=this.myUrlService.Url
   }

  ngOnInit() {
  }

}