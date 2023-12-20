import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from '../../models/forecast.type';

@Component({
  selector: 'app-forecasts-page',
  templateUrl: './forecasts-page.component.html',
  styleUrls: ['./forecasts-page.component.css'],
})
export class ForecastsPageComponent {
  zipcode: string;
  forecast: Forecast;

  constructor(protected weatherService: WeatherService, route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => (this.forecast = data));
    });
  }
}
