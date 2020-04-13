import { Component, OnInit } from '@angular/core';
import { BmiService } from '../../services/bmi.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  BMI: string;
  results: string;


  constructor(private bmi: BmiService) { }

  ngOnInit() {
    this.BMI = this.bmi.getBMI().toFixed(1);  
    console.log(this.BMI);   
    this.setResults(); 
  }

  setResults(){
    this.results = `Your body mass index is ${this.BMI}`;
  }

}
