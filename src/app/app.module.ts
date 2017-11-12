import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
