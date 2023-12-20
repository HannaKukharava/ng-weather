import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { CacheResolverService } from '../services/cache-resolver.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cacheResolver: CacheResolverService = inject(CacheResolverService);

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    const cachedResponse = this.cacheResolver.getCachedResponse(req.url);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next);
  }

  private sendRequest(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheResolver.updateCache(req.url, event);
        }
      })
    );
  }
}
