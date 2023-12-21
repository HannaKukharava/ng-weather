import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-conditions-page',
  templateUrl: './current-conditions-page.component.html',
  styleUrls: ['./current-conditions-page.component.css'],
})
export class CurrentConditionsPageComponent {
  protected weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
}
