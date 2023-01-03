import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus/aboutus.component';
import { FemaleComponent } from './components/female/female/female.component';
import { HomeComponent } from './components/home/home/home.component';
import { MaleComponent } from './components/male/male/male.component';
import { StartComponent } from './components/start/start/start.component';

const routes: Routes = [

   
   {path:"male",component:MaleComponent},
   {path:"female",component:FemaleComponent},
   {path:"start",component:StartComponent},
   {path:"aboutus",component:AboutusComponent},
   {path: "**" , component:HomeComponent}
   
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
