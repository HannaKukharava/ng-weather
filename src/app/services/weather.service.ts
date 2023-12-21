import { Injectable, Signal, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../models/current-conditions.type';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { Forecast } from '../models/forecast.type';
import { LocationService } from './location.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, filter } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  private currentConditions = signal<ConditionsAndZip[]>([]);

  constructor(private http: HttpClient, private locationService: LocationService) {
    this.checkLocationChange();
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  fetchCurrentConditions(zipcode: string): Observable<CurrentConditions> {
    return this.http.get<CurrentConditions>(
      `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
    );
  }

  private removeLocation(zipcode: string) {
    this.locationService.removeLocation(zipcode);
    return of();
  }

  private checkLocationChange() {
    this.locationService.locations$.pipe(takeUntilDestroyed()).subscribe(zipcodes => {
      this.removeCurrentConditions(zipcodes);
      this.addCurrentConditions(zipcodes);
    });
  }

  private removeCurrentConditions(zipcodes: string[]) {
    this.currentConditions.update(conditions => conditions.filter(condition => zipcodes.includes(condition.zip)));
  }

  private addCurrentConditions(zipcodes: string[]): void {
    const missingZipcodes = zipcodes.filter(zip => !this.currentConditions().some(condition => condition.zip === zip));
    missingZipcodes.forEach(zip => {
      this.fetchCurrentConditions(zip)
        .pipe(
          catchError(() => this.removeLocation(zip)),
          filter(Boolean)
        )
        .subscribe((data: CurrentConditions) =>
          this.currentConditions.update(conditions => [...conditions, { zip, data }])
        );
    });
  }
}
