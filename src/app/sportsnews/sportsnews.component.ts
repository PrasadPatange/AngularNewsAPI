import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../service/newsservice.service";
@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private services:NewsserviceService) { }

  // Display Data
  sportsDisplay : any = [];

  ngOnInit(){
    return this.services.sportNews().subscribe( (result) =>{
      console.log(result);
      this.sportsDisplay = result.articles;
    })
  }

}
