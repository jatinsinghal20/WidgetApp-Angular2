import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {WidgetListService} from "./widget-list.service";
import {FormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WidgetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
