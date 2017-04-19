import { Component, Input } from '@angular/core';

import { Book } from 'shared/models/book';

@Component({
  selector: 'aj-slide',
  templateUrl: 'slide.component.html',
  styleUrls: ['slide.component.css']
})
export class SlideComponent {
  @Input() book: Book;
}
