import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastsPageComponent } from './pages/forecasts-page/forecasts-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastsPageComponent,
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { bindToComponentInputs: true });
