import { Injectable, Signal, signal } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../models/current-conditions.type';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { Forecast } from '../models/forecast.type';
import { toObservable } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs/operators';
import { LocationService } from './location.service';

@Injectable()
export class WeatherService {
  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  private currentConditions = signal<ConditionsAndZip[]>([]);

  constructor(private http: HttpClient, private locationService: LocationService) {
    this.initLocationChangeCheck();
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(
      `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  private initLocationChangeCheck() {
    combineLatest([this.locationService.locations$, toObservable(this.currentConditions)])
      .pipe(distinctUntilChanged((prev, curr) => prev[0].join(',') === curr[0].join(',')))
      .subscribe(([zipcodes, conditions = []]) => {
        const filteredConditions = this.removeCurrentConditions(zipcodes, conditions);
        this.currentConditions.set(filteredConditions);
        this.addMissingCurrentConditions(zipcodes, conditions);
      });
  }

  private removeCurrentConditions(zipcodes: string[], conditions: ConditionsAndZip[]) {
    return conditions.filter(condition => zipcodes.includes(condition.zip));
  }

  private addMissingCurrentConditions(zipcodes: string[], conditions: ConditionsAndZip[]): void {
    const missingZipcodes = zipcodes.filter(zip => !conditions.some(condition => condition.zip === zip));
    missingZipcodes.forEach(zip => {
      this.getCurrentCondition(zip).subscribe(data =>
        this.currentConditions.update(conditions => [...conditions, { zip, data }])
      );
    });
  }

  private getCurrentCondition(zipcode: string) {
    return this.http.get<CurrentConditions>(
      `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
    );
  }
}
