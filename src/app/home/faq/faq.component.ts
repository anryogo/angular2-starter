import { Component } from '@angular/core';

import { FAQ } from 'assets/data/faq';

@Component({
  selector: 'aj-faq',
  templateUrl: 'faq.component.html',
  styleUrls: ['faq.component.css']
})
export class FaqComponent {
  data = FAQ;

  toggleState(selected) {
    this.data.forEach((item) => {
      if (item.question !== selected.question) {
        item.opened = false;
      }
    });
    selected.opened = !selected.opened;
  }
}
