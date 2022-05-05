import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Data } from '../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private currentUrl = 'https://www.weatherinnovations.com/coop/weather.json';
  weatherData: Data[] = [];

  submit(url: string): void {
    console.log(url);
    this.currentUrl = url;
    this.fetchData();
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Fetch initial data from https://www.weatherinnovations.com/coop/weather.json
    this.fetchData();
  }

  fetchData(): void {
    this.weatherService.fetchData(this.currentUrl)
        .subscribe(res => {
          console.log(res);
        });
  }

}
