import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { HealthComponent } from "./health/health.component";
import { TechnewsComponent } from "./technews/technews.component";
import { SportsnewsComponent } from "./sportsnews/sportsnews.component";
import { GeneralComponent } from "./general/general.component";
const routes: Routes = [
  {
    path :'', component:TopheadingComponent    //Home TopHeading
  },
  {
    path :'health', component:HealthComponent    //Health News
  },
  {
    path :'technology', component:TechnewsComponent    //Technolgy News
  },
  {
    path :'sports', component:SportsnewsComponent    //Sports News
  },
  {
    path :'general', component:GeneralComponent    //General News
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
