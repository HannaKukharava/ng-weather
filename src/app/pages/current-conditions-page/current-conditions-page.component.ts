import { Component, inject, Signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { ConditionsAndZip } from '../../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions-page',
  templateUrl: './current-conditions-page.component.html',
  styleUrls: ['./current-conditions-page.component.css'],
})
export class CurrentConditionsPageComponent {
  protected weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  private router = inject(Router);

  //TODO move to component
  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
