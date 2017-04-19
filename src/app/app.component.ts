import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'audio-jewels',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  isAuthPage: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit() {
    this.bindRouterEvents();
  }

  private bindRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.document.body.scrollTop = 0;

        this.isAuthPage = this.router.url.indexOf('/login') >= 0 ||
                          this.router.url.indexOf('/sign-up') >= 0;

        if (!this.isAuthPage) {
          this.scrollToAnchor();
        }
      }
    });
  }

  /**
   * Fix of automatic scroll to anchor links
   */
  private scrollToAnchor() {
    const tree = this.router.parseUrl(this.router.url);

    if (tree.fragment) {
      const element = this.document.getElementById(tree.fragment);
      const defaultHeaderHeight = 100;

      if (element) {
        element.scrollIntoView(element);
        this.document.body.scrollTop = this.document.body.scrollTop - defaultHeaderHeight;
      }
    }
  }
}
