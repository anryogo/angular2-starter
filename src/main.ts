import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if (APP_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((success) => console.log('App bootstrapped successfully'))
  .catch((err) => console.error(err));
