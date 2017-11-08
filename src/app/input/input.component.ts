import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges{
  @Input() item: any;
  @Output() notify: EventEmitter<object> = new EventEmitter();
  name : string;
  description: string;

  ngOnChanges(){
    if(this.item) {
      this.name = this.item.name;
      this.description = this.item.desc;
    }
  }
  widget(){
    let widget:any = {
      name:this.name,
      desc: this.description
    };
    if(this.item){
      widget.id = this.item.id;
    }
    this.notify.emit(widget);
    this.name ="";
    this.description ="";
  }
}
