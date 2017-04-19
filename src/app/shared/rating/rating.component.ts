import { Component, Input } from '@angular/core';

@Component({
  selector: 'aj-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css']
})
export class RatingComponent {
  @Input() rate: number;
  @Input() readonly: boolean = false;
}
