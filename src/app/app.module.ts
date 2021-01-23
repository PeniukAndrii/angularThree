import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {RouterModule} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { InfoCarComponent } from './components/info-car/info-car.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    InfoCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'some', component: HomeComponent
      },
      {
        path: 'cars', component: CarsComponent, children: [{
            path: ':id', component: InfoCarComponent
          }]
      }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
