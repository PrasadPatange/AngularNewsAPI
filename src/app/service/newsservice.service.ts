import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http : HttpClient) { }

  // newsApiUrl
  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  // topHeading()
  topHeading() : Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
  // healthApiUrl
  healthApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  // healthNews()
  healthNews() : Observable<any>
  {
    return this.http.get(this.healthApiUrl);
  }
  // sportsApiUrl
  sportsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  // topHeading()
  sportNews() : Observable<any>
  {
    return this.http.get(this.sportsApiUrl);
  }
  // techApiUrl
  techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  // topHeading()
  techNews() : Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }
  // generalApiUrl
  generalApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  // topHeading()
  generalNews() : Observable<any>
  {
    return this.http.get(this.generalApiUrl);
  }

}
