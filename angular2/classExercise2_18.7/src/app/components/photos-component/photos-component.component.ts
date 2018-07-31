import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { PhotosService } from '../../services/photos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos-component',
  templateUrl: './photos-component.component.html',
  styleUrls: ['./photos-component.component.css']
})
export class PhotosComponentComponent implements OnInit {

    public photos:Photo[];

  constructor(private photoService:PhotosService) { }

  ngOnInit() {

    let observable: Observable<Photo[]> = this.photoService.getAllPhotos();
        observable.subscribe((photos) => { 
            this.photos = photos;
            console.log(photos)
        });
  }

}
