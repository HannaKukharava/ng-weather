import { Component, EventEmitter, Input, Output, Signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconPipe } from '../../pipes/weather-icon.pipe';
import { TabsetComponent } from '../tabset/tabset.component';
import { ConditionsAndZip } from '../../conditions-and-zip.type';
import { RouterLink } from '@angular/router';
import { TabComponent } from '../tabset/tab/tab.component';

@Component({
  selector: 'app-current-condition',
  standalone: true,
  imports: [CommonModule, WeatherIconPipe, TabsetComponent, RouterLink, TabComponent],
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentConditionComponent {
  @Input() currentConditionsByZip: Signal<ConditionsAndZip[]>;
  @Output() remove = new EventEmitter<string>();
}
