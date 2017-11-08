import { Component, OnInit } from '@angular/core';
import {WidgetListService} from "../widget-list.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items : any[];
  itemFound: any;

  constructor(private myService : WidgetListService) { }

  ngOnInit() {
    this.myService.getData()
      .subscribe(res=>{
        this.items = res
      })
  }
  onWidget(widget){
    console.log(widget);
    this.myService.changeData(widget)
      .subscribe(data=>{
          if(widget.id){
            this.items[widget.id-1] = widget;
            this.itemFound=null;
          }
          else this.items.push(data)
      })
  }

  showWidget(widget){
    this.itemFound = widget
  }
/*
  delete(widget){
    this.myService.deleteData()
      .subscribe(res=>{
      })
  }?*/
}
