import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { LocationService } from './services/location.service';
import { ForecastsPageComponent } from './pages/forecasts-page/forecasts-page.component';
import { WeatherService } from './services/weather.service';
import { CurrentConditionsPageComponent } from './pages/current-conditions-page/current-conditions-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { CacheResolverService } from './services/cache-resolver.service';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { CurrentConditionComponent } from './components/current-condition/current-condition.component';
import { CacheSettingsFormComponent } from './components/cache-settings-form/cache-settings-form.component';
import { CacheSettingsComponent } from './containers/cache-settings/cache-settings.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorMessageInterceptor } from './interceptors/error-message.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorMessageInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsPageComponent,
    CurrentConditionsPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ForecastComponent,
    WeatherIconPipe,
    CurrentConditionComponent,
    CacheSettingsFormComponent,
    CacheSettingsComponent,
  ],
  providers: [...interceptors, LocationService, WeatherService, CacheResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
