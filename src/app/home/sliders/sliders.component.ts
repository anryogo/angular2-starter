import { Component, OnInit } from '@angular/core';

import { SlidersService } from 'core/services';
import { Book } from 'shared/models/book';

@Component({
  selector: 'aj-sliders',
  templateUrl: 'sliders.component.html',
  styleUrls: ['sliders.component.css']
})
export class SlidersComponent implements OnInit {
  books: Book[];

  constructor(private service: SlidersService) {}

  ngOnInit() {
    this.service.getContent()
      .subscribe((res) => this.books = res);
  }
}
