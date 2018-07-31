import { Component, OnInit } from '@angular/core';
import {UrlService} from "../shared/services/UrlData.service";
import {UrlInfo} from "../shared/models/urlData.model";
import {countryInfo} from "../shared/models/datainfo.model"



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user_text:string;

  LocalUrlInfo:any;

  constructor(private myUrlService:UrlService) {
    this.LocalUrlInfo=this.myUrlService.Url
   }

  ngOnInit() {
  }

}