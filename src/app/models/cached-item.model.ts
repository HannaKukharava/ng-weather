import { HttpResponse } from '@angular/common/http';

export interface CachedItem {
  expiresIn: number | null;
  value: HttpResponse<unknown>;
}
