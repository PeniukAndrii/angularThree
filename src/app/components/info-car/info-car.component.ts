import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info-car',
  templateUrl: './info-car.component.html',
  styleUrls: ['./info-car.component.css']
})
export class InfoCarComponent implements OnInit {

  id = null;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => this.id = value);
  }

  ngOnInit(): void {
  }

}
