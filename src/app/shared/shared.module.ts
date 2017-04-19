import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SwiperModule } from 'angular2-useful-swiper';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { RatingModule } from 'ng2-bootstrap/rating';
import { PopoverModule, PopoverConfig } from 'ng2-bootstrap/popover';

import { SliderComponent } from './slider';
import { SlideComponent } from './slider/slide';

import { RatingComponent } from './rating';

function getPopoverConfig(): PopoverConfig {
  return Object.assign(new PopoverConfig(), {
    placement: 'left',
    container: 'body',
    triggers: ''
  });
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    DropdownModule.forRoot(),
    RatingModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [
    SliderComponent,
    SlideComponent,
    RatingComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    DropdownModule,
    RatingModule,
    PopoverModule,

    SliderComponent,
    SlideComponent,
    RatingComponent
  ],
  providers: [
    { provide: PopoverConfig, useFactory: getPopoverConfig }
  ]
})
export class SharedModule {}
