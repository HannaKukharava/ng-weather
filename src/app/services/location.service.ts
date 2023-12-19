import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private locationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  locations$ = this.locationsSubject.asObservable();

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locationsSubject.next(JSON.parse(locString));
    }
  }

  addLocation(zipcode: string) {
    if (!this.locationsSubject.value.includes(zipcode)) {
      const locations = [...this.locationsSubject.value, zipcode];
      this.locationsSubject.next(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }
  }

  removeLocation(zipcode: string) {
    const locations = this.locationsSubject.value.filter(item => item !== zipcode);
    this.locationsSubject.next(locations);
    localStorage.setItem(LOCATIONS, JSON.stringify(locations));
  }
}
