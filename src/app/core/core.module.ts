import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

/* Application header */
import { HeaderModule } from './header';

@NgModule({
  imports: [
    HeaderModule
  ],
  declarations: [

  ],
  exports: [
    HeaderModule
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

      ]
    };
  }
}
