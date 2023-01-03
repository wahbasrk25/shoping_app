import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { MaleComponent } from './components/male/male/male.component';
import { FemaleComponent } from './components/female/female/female.component';
import { StartComponent } from './components/start/start/start.component';
import { AboutusComponent } from './components/aboutus/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaleComponent,
    FemaleComponent,
    StartComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
