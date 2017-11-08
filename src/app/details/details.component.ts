import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() items:any[];
  @Output() show: EventEmitter<object> = new EventEmitter();
  @Output() deleted: EventEmitter<object> = new EventEmitter();
  description: string;

  update(item){
    this.description = item.desc;
    this.show.emit(item);
  }

  delete(item){
    this.deleted.emit(item);
  }
}
