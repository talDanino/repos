import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail-component',
  templateUrl: './thumbnail-component.component.html',
  styleUrls: ['./thumbnail-component.component.css']
})
export class ThumbnailComponentComponent  {

    @Input()
    public source: string; // Image source.

    @Input("side")
    public length: number; // Width/Height.

 
    @Output()
    public myClick: EventEmitter<string> = new EventEmitter();

    public imageClicked(): void {
        this.myClick.emit(this.source);
    }

}
