import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../service/newsservice.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private services:NewsserviceService) { }

  // Display Data
  techDisplay : any = [];

  ngOnInit(){
    return this.services.techNews().subscribe( (result) =>{
      console.log(result);
      this.techDisplay = result.articles;
    })
  }

}
