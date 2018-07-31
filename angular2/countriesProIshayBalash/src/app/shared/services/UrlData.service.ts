import {countryInfo} from "../models/datainfo.model"
import {UrlInfo} from "../models/urlData.model";
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()
export class UrlService{
    Url:any={info:[]};
    constructor(private myHttpClient:HttpClient){
        let urllink:string="http://restcountries.eu/rest/v2/all";
        this.myHttpClient.get(urllink).subscribe((x:any)=>{this.Url.info=x
        });
    }
}