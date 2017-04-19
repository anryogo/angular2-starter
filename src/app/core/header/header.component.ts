import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { socialLinks, homeLinks, catalogLinks } from 'assets/data/links';

@Component({
  selector: 'aj-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  socialLinks = socialLinks;
  homeLinks = homeLinks;
  catalogLinks = catalogLinks;

  fixed: boolean = false;
  isSearchFocused: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleFocus() {
    this.isSearchFocused = !this.isSearchFocused;
  }

  scrollTop() {
    this.document.body.scrollTop = 0;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.fixed = this.document.body.scrollTop > 100;
  }
}
