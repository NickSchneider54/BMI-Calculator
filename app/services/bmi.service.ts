import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  BMI: number;

  constructor() { }


  setBMI(bmi){
    this.BMI = bmi;
  }

  getBMI(){
    return this.BMI;
  }

}
