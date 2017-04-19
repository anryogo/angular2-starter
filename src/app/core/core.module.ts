import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

/* Application header & footer */
import { HeaderModule } from './header';
import { FooterModule } from './footer';

/* Application-wide Service Providers */
import * as ServiceProviders from './services';

@NgModule({
  imports: [
    HeaderModule,
    FooterModule
  ],
  declarations: [

  ],
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class CoreModule {
  /**
   * Prevent re-import of the core module by other modules then AppModule
   */
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...Object.keys(ServiceProviders).map(key => ServiceProviders[key])
      ]
    };
  }
}
