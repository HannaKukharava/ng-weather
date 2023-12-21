import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorMessageInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(this.extractErrorMessages(error), 'Error');
        return throwError(() => error);
      })
    );
  }

  private extractErrorMessages(error: HttpErrorResponse): string {
    const message = error.error.message as string | null | undefined;
    if (message) {
      return message.charAt(0).toUpperCase() + message.slice(1);
    }
    return 'Oops! Something went wrong';
  }
}
