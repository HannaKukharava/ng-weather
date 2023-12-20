import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CachedItem } from '../models/cached-item.model';

@Injectable({ providedIn: 'root' })
export class CacheResolverService {
  private cache = new Map<string, CachedItem>();

  getCachedResponse(url: string) {
    const cachedData = this.cache.get(url);
    if (!cachedData) {
      return null;
    }
    if (this.isExpired(cachedData.expiresIn)) {
      this.cache.delete(url);
      return null;
    }
    return cachedData.value;
  }

  updateCache(url: string, value: HttpResponse<any>, duration: number | null = 7200) {
    const expiresIn = duration ? Date.now() + duration * 1000 : null;
    this.cache.set(url, { expiresIn, value });
  }

  private isExpired(expiresIn: number) {
    return expiresIn !== null && expiresIn < Date.now();
  }
}
