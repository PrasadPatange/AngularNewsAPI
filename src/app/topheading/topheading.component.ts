import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../service/newsservice.service";

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services:NewsserviceService) { }

  // Display Data
  topheadingDisplay : any = [];

  ngOnInit(){
    return this.services.topHeading().subscribe( (result) =>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }
 
}
