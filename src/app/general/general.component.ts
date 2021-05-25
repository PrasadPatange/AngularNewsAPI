import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../service/newsservice.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private services:NewsserviceService) { }

  // Display Data
  generalDisplay : any = [];

  ngOnInit(){
    return this.services.generalNews().subscribe( (result) =>{
      console.log(result);
      this.generalDisplay = result.articles;
    })
  }

}
