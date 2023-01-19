import { NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var window: Record<string, any>;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref: NgModuleRef<AppModule>) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));
