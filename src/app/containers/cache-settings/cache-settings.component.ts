import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
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
import { CacheSettingsFormComponent } from '../../components/cache-settings-form/cache-settings-form.component';
import { CacheResolverService } from '../../services/cache-resolver.service';

@Component({
  selector: 'app-cache-settings',
  standalone: true,
  imports: [CommonModule, CacheSettingsFormComponent],
  templateUrl: './cache-settings.component.html',
  styleUrls: ['./cache-settings.component.css'],
})
export class CacheSettingsComponent {
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement>;
  cacheResolverService = inject(CacheResolverService);

  saveCacheConfig(duration: Duration) {
    this.cacheResolverService.updateCacheConfig({ duration });
    this.dialog.nativeElement.close();
  }
}
