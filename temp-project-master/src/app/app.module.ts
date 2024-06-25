import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SinginComponent} from './components/singin/singin.component';



@NgModule({
  declarations: [
     
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SinginComponent,
    AppComponent ,
    HttpClientModule
    // Add other modules here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
