import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { Book } from 'shared/models/book';

@Component({
  selector: 'aj-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})
export class SliderComponent implements OnInit {
  config: any;

  @Input() books: Book[];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.config = {
      spaceBetween: 30,
      slidesPerView: 5,
      nextButton: this.el.nativeElement.querySelector('.swiper-button-next'),
      prevButton: this.el.nativeElement.querySelector('.swiper-button-prev')
    };
  }
}
