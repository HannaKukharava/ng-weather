import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon',
  standalone: true,
})
export class WeatherIconPipe implements PipeTransform {
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  transform(value: number): string {
    let iconUrl = WeatherIconPipe.ICON_URL;
    if (value >= 200 && value <= 232) {
      iconUrl += 'art_storm.png';
    } else if (value >= 501 && value <= 511) {
      iconUrl += 'art_rain.png';
    } else if (value === 500 || (value >= 520 && value <= 531)) {
      iconUrl += 'art_light_rain.png';
    } else if (value >= 600 && value <= 622) {
      iconUrl += 'art_snow.png';
    } else if (value >= 801 && value <= 804) {
      iconUrl += 'art_clouds.png';
    } else if (value === 741 || value === 761) {
      iconUrl += 'art_fog.png';
    } else {
      iconUrl += 'art_clear.png';
    }
    return iconUrl;
  }
}
