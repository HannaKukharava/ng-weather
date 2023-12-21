import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forecast } from '../../models/forecast.type';
import { WeatherIconPipe } from '../../pipes/weather-icon.pipe';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Duration, TimeUnit } from '../../models/duration.model';

@Component({
  selector: 'app-cache-settings-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cache-settings-form.component.html',
  styleUrls: ['./cache-settings-form.component.css'],
})
export class CacheSettingsFormComponent {
  @Input() set duration(duration: Duration) {
    this.form.patchValue(duration);
  }

  @Output() save = new EventEmitter<Duration>();

  form = this.createForm();
  protected readonly TimeUnit = TimeUnit;

  constructor(private fb: NonNullableFormBuilder) {}

  submit() {
    this.save.emit(this.form.value as Duration);
  }

  private createForm() {
    return this.fb.group({
      time: [0, [Validators.required, Validators.min(0)]],
      unit: [TimeUnit.HOURS, [Validators.required]],
    });
  }
}
