import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsserviceService } from "./service/newsservice.service";
import { HealthComponent } from './health/health.component';
import { TechnewsComponent } from './technews/technews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { GeneralComponent } from './general/general.component';
// for HttpClient import:
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Router import:
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    HealthComponent,
    TechnewsComponent,
    SportsnewsComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // for HttpClient use:
    // LoadingBarHttpClientModule,
     // for Router use:
    //  LoadingBarRouterModule,


  ],
  providers: [NewsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
