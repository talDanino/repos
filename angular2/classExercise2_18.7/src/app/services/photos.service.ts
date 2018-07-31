import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  public getAllPhotos(): Observable<Photo[]> {
    // Returns Observable object:
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
    }
}
