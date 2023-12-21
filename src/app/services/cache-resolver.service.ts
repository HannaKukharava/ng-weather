import { HttpResponse } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';
import { CacheConfig, CachedItem } from '../models/cache.model';
import { CACHE_CONFIG } from '../untils/cache-config';

@Injectable({ providedIn: 'root' })
export class CacheResolverService {
  private cacheConfig = signal<CacheConfig>({} as CacheConfig);
  private cache = new Map<string, CachedItem>();

  constructor() {
    this.setupCacheConfig();
  }

  getCacheDuration() {
    return this.cacheConfig().duration;
  }

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

  updateCache(url: string, value: HttpResponse<any>) {
    this.cache.set(url, { expiresIn: this.getExpirationTime(), value });
  }

  updateCacheConfig(config: CacheConfig) {
    this.cacheConfig.set(config);
  }

  private setupCacheConfig() {
    effect(() => {
      if (!this.getCacheDuration()) {
        this.cacheConfig().duration = CACHE_CONFIG.duration;
      }
      this.cache.forEach(value => {
        value.expiresIn = this.getExpirationTime();
      });
    });
  }

  private getExpirationTime() {
    const duration = this.getCacheDuration();
    return duration ? Date.now() + duration.time * duration.unit : null;
  }

  private isExpired(expiresIn: number) {
    return expiresIn !== null && expiresIn < Date.now();
  }
}
