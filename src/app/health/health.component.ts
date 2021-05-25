import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../service/newsservice.service";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private services:NewsserviceService) { }

  // Display Data
  HealthDisplay : any = [];

  ngOnInit(){
    return this.services.healthNews().subscribe( (result) =>{
      console.log(result);
      this.HealthDisplay = result.articles;
    })
  }
}
