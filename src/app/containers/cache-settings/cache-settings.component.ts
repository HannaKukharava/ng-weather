import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Duration } from '../../models/duration.model';
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
