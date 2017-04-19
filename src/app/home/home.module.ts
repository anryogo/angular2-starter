import { NgModule } from '@angular/core';
import { SharedModule } from 'shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { TopCategoriesComponent } from './top-categories';
import { SlidersComponent } from './sliders';
import { AboutComponent } from './about';
import { WhatDoIGetComponent } from './what-do-i-get';
import { HowToStartComponent } from './how-to-start';
import { SubscribeComponent } from './subscribe';
import { MobileComponent } from './mobile';
import { FaqComponent } from './faq';
import { FeedbackComponent } from './feedback';
import { ContactsComponent } from './contacts';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    TopCategoriesComponent,
    SlidersComponent,
    AboutComponent,
    WhatDoIGetComponent,
    HowToStartComponent,
    SubscribeComponent,
    MobileComponent,
    FaqComponent,
    FeedbackComponent,
    ContactsComponent
  ]
})
export class HomeModule {}
