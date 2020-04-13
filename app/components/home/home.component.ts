import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
import { BmiService } from '../../services/bmi.service';
import { Router } from '@angular/router';
registerElement('CardView', () => CardView);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  height: number = 50;
  weight: number = 180;
  BMI: number;

  constructor(private bmi: BmiService, private router: Router) { }

  decWeight(){
    this.weight--;
  }

  incWeight(){
    this.weight++;
  }


  calculateBMI(){
    this.BMI = (this.weight/(Math.pow(this.height, 2)) * 703);
    console.log(this.BMI);
    this.bmi.setBMI(this.BMI);
    this.router.navigate(['results']);
  }

}
