import { HttpResponse } from '@angular/common/http';
import { Duration } from './duration.model';

export interface CachedItem {
  expiresIn: number | null;
  value: HttpResponse<unknown>;
}

export interface CacheConfig {
  duration: Duration;
}
