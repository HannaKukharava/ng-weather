import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forecast } from '../../models/forecast.type';
import { WeatherIconPipe } from '../../pipes/weather-icon.pipe';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, WeatherIconPipe],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input({ required: true }) forecast: Forecast;
}
