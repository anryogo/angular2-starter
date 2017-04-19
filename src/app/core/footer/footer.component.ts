import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { homeLinks, catalogLinks, contactsLinks, accountLinks } from 'assets/data/links';

@Component({
  selector: 'aj-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
  homeLinks = homeLinks;
  catalogLinks = catalogLinks;
  contactsLinks = contactsLinks;
  accountLinks = accountLinks;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  scrollTop() {
    this.document.body.scrollTop = 0;
  }
}
