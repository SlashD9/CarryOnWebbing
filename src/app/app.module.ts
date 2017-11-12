import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
