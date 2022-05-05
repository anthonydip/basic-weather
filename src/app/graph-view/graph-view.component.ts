import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Data } from '../data';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit, OnDestroy {
  data!: Data[];
  private weatherSub: Subscription;

  constructor(
    private weatherService: WeatherService,
  ) {
    this.weatherSub = this.weatherService.getData().subscribe(res => {
      this.data = res;
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe();
  }

}
