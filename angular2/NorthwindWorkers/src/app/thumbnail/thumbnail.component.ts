import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    @Input()
    public source: string; //image source.

    @Input("side")
    public length: number; // Width/Height.


    
    @Output()
    public myClick: EventEmitter<string> = new EventEmitter();

    public imageClicked(): void {
        this.myClick.emit(this.source);
    }
}
