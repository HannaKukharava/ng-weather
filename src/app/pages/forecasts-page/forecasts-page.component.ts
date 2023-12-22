import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Forecast } from '../../models/forecast.type';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-forecasts-page',
  templateUrl: './forecasts-page.component.html',
  styleUrls: ['./forecasts-page.component.css'],
})
export class ForecastsPageComponent {
  @Input('zipcode') set zipcode(zipcode) {
    this.weatherService
      .getForecast(zipcode)
      .pipe(untilDestroyed(this))
      .subscribe(data => (this.forecast = data));
  }

  forecast: Forecast;

  constructor(protected weatherService: WeatherService) {}
}
