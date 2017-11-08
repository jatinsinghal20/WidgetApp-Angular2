import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http"
import 'rxjs/add/operator/map'

const Base_URL ='http://localhost:3000/items/';
const header = {headers: new Headers({
    'Content-Type': 'application/json'
  }
)
};

@Injectable()
export class WidgetListService {

  constructor(private http: Http){ }

  getData() {
    return this.http.get(Base_URL)
      .map(res => res.json())
  }

  postData(data){
    return this.http.post(Base_URL, data, header)
      .map(res=>res.json())
  }

  updateData(data){
    return this.http.patch(Base_URL+data.id, data,header);
  }

  changeData(data){
   return data.id?this.updateData(data):this.postData(data)
  }
}
