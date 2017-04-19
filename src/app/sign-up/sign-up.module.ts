import { NgModule } from '@angular/core';
import { SharedModule } from 'shared';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    SharedModule,
    SignUpRoutingModule
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule {}
