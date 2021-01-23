import {Component, OnInit} from '@angular/core';
import {cars} from '../../db/db';
import {ICar} from '../../interfaces/car/i-car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[] = cars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
