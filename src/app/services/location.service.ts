import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  locations: string[] = [];
  protected locationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  locations$ = this.locationsSubject.asObservable();

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
      this.locationsSubject.next(this.locations);
    }
  }

  addLocation(zipcode: string) {
    if (!this.locations.includes(zipcode)) {
      const locations = [...this.locations, zipcode];
      this.updateLocations(locations);
    }
  }

  removeLocation(zipcode: string) {
    const locations = this.locations.filter(item => item !== zipcode);
    this.updateLocations(locations);
  }

  private updateLocations(locations: string[]) {
    this.locations = locations;
    this.locationsSubject.next(locations);
    localStorage.setItem(LOCATIONS, JSON.stringify(locations));
  }
}
