webpackJsonp([4],{1232:function(n,e,t){"use strict";var o=t(210),i=t(0),r=t(637);i.enableProdMode(),o.platformBrowserDynamic().bootstrapModule(r.AppModule).then(function(n){return console.log("App bootstrapped successfully")}).catch(function(n){return console.error(n)})},320:function(n,e,t){"use strict";e.socialLinks=[{link:"#",cssClass:"fa-facebook"},{link:"#",cssClass:"fa-twitter"},{link:"#",cssClass:"fa-google-plus-official"},{link:"#",cssClass:"fa-linkedin"},{link:"#",cssClass:"fa-whatsapp"},{link:"#",cssClass:"fa-instagram"}],e.homeLinks=[{link:"about",title:"About"},{link:"what-do-i-get",title:"What do I get"},{link:"how-to-start",title:"How to start"},{link:"subscribe",title:"Subscribe"},{link:"mobile",title:"Mobile app"},{link:"faq",title:"FAQ"},{link:"feedback",title:"Feedback"},{link:"contacts",title:"Contact us"}],e.catalogLinks=[{link:"#",title:"Best Sellers"},{link:"#",title:"New Releases"},{link:"#",title:"Whispersync for Voice"},{link:"#",title:"Foreign Language"},{link:"#",title:"Press Coverage"},{link:"#",title:"Mysteries & Thrillers"},{link:"#",title:"Sci-fi & Fantasy"},{link:"#",title:"History"},{link:"#",title:"Classics"},{link:"#",title:"Bios & Memoirs"},{link:"#",title:"Business"},{link:"#",title:"Self Development"},{link:"#",title:"Romance"},{link:"#",title:"Fiction"},{link:"#",title:"Kids"}],e.contactsLinks=[{link:"mailto:info@audiojewels.com",title:"info@audiojewels.com"},{link:"#",title:"Facebook"},{link:"#",title:"Twitter"},{link:"#",title:"Google+"},{link:"#",title:"LinkedIn"},{link:"#",title:"WhatsApp"},{link:"#",title:"Instagram"}],e.accountLinks=[{link:"#",title:"My Cart"},{link:"#",title:"Membership"},{link:"#",title:"My Account"},{link:"#",title:"My AudioBooks"},{link:"#",title:"Wishlist"},{link:"#",title:"Bookmarks"},{link:"#",title:"Settings"}]},406:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(776))},637:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=t(66),l=t(765),a=t(406),s=t(773),c=t(649),u=t(764);t(937);var p=function(){function n(){}return n}();p=o([i.NgModule({imports:[r.BrowserModule,s.CoreModule.forRoot(),c.SharedModule,u.AppRoutingModule],declarations:[l.AppComponent,a.PageNotFoundComponent],bootstrap:[l.AppComponent]})],p),e.AppModule=p},648:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(774)),o(t(775))},649:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(780))},650:function(n,e,t){"use strict";e.RULES={username:{validator:{required:"Name is required"}},email:{regexp:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",validator:{required:"Email is required",pattern:"Please enter a valid email address"}},phone:{regexp:"^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$",validator:{required:"Phone is required",pattern:"Please enter a valid phone number"}},message:{validator:{required:"Message is required"}}}},764:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=t(95),l=t(406),a=[{path:"home",loadChildren:function(){return new Promise(function(n){t.e(0).then(function(e){n(t(1235).HomeModule)}.bind(null,t)).catch(t.oe)})}},{path:"login",loadChildren:function(){return new Promise(function(n){t.e(2).then(function(e){n(t(1236).LoginModule)}.bind(null,t)).catch(t.oe)})}},{path:"sign-up",loadChildren:function(){return new Promise(function(n){t.e(1).then(function(e){n(t(1237).SignUpModule)}.bind(null,t)).catch(t.oe)})}},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:l.PageNotFoundComponent}],s=function(){function n(){}return n}();s=o([i.NgModule({imports:[r.RouterModule.forRoot(a)],exports:[r.RouterModule]})],s),e.AppRoutingModule=s},765:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=this&&this.__param||function(n,e){return function(t,o){e(t,o,n)}},l=t(0),a=t(95),s=t(66),c=function(){function n(n,e){this.document=n,this.router=e,this.isAuthPage=!1}return n.prototype.ngOnInit=function(){this.bindRouterEvents()},n.prototype.bindRouterEvents=function(){var n=this;this.router.events.subscribe(function(e){e instanceof a.NavigationEnd&&(n.document.body.scrollTop=0,n.isAuthPage=n.router.url.indexOf("/login")>=0||n.router.url.indexOf("/sign-up")>=0,n.isAuthPage||n.scrollToAnchor())})},n.prototype.scrollToAnchor=function(){var n=this.router.parseUrl(this.router.url);if(n.fragment){var e=this.document.getElementById(n.fragment);e&&(e.scrollIntoView(e),this.document.body.scrollTop=this.document.body.scrollTop-100)}},n}();c=o([l.Component({selector:"audio-jewels",template:t(960),styles:[t(959)]}),r(0,l.Inject(s.DOCUMENT)),i("design:paramtypes",[Document,a.Router])],c),e.AppComponent=c},766:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=this&&this.__param||function(n,e){return function(t,o){e(t,o,n)}},l=t(0),a=t(772),s=t(769),c=t(648),u=p=function(){function n(n){if(n)throw new Error("CoreModule is already loaded. Import it in the AppModule only")}return n.forRoot=function(){return{ngModule:p,providers:Object.keys(c).map(function(n){return c[n]}).slice()}},n}();u=p=o([l.NgModule({imports:[a.HeaderModule,s.FooterModule],declarations:[],exports:[a.HeaderModule,s.FooterModule]}),r(0,l.Optional()),r(0,l.SkipSelf()),i("design:paramtypes",[u])],u),e.CoreModule=u;var p},767:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=this&&this.__param||function(n,e){return function(t,o){e(t,o,n)}},l=t(0),a=t(66),s=t(320),c=function(){function n(n){this.document=n,this.homeLinks=s.homeLinks,this.catalogLinks=s.catalogLinks,this.contactsLinks=s.contactsLinks,this.accountLinks=s.accountLinks}return n.prototype.scrollTop=function(){this.document.body.scrollTop=0},n}();c=o([l.Component({selector:"aj-footer",template:t(962),styles:[t(961)]}),r(0,l.Inject(a.DOCUMENT)),i("design:paramtypes",[Document])],c),e.FooterComponent=c},768:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=t(15),l=t(95),a=t(767),s=function(){function n(){}return n}();s=o([i.NgModule({imports:[r.CommonModule,l.RouterModule],declarations:[a.FooterComponent],exports:[a.FooterComponent]})],s),e.FooterModule=s},769:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(768))},770:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=this&&this.__param||function(n,e){return function(t,o){e(t,o,n)}},l=t(0),a=t(66),s=t(320),c=function(){function n(n){this.document=n,this.socialLinks=s.socialLinks,this.homeLinks=s.homeLinks,this.catalogLinks=s.catalogLinks,this.fixed=!1,this.isSearchFocused=!1}return n.prototype.toggleFocus=function(){this.isSearchFocused=!this.isSearchFocused},n.prototype.scrollTop=function(){this.document.body.scrollTop=0},n.prototype.onWindowScroll=function(){this.fixed=this.document.body.scrollTop>100},n}();o([l.HostListener("window:scroll",[]),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],c.prototype,"onWindowScroll",null),c=o([l.Component({selector:"aj-header",template:t(964),styles:[t(963)]}),r(0,l.Inject(a.DOCUMENT)),i("design:paramtypes",[Document])],c),e.HeaderComponent=c},771:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=t(15),l=t(95),a=t(770),s=function(){function n(){}return n}();s=o([i.NgModule({imports:[r.CommonModule,l.RouterModule],declarations:[a.HeaderComponent],exports:[a.HeaderComponent]})],s),e.HeaderModule=s},772:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(771))},773:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(766))},774:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=t(0),l=t(209),a=function(){function n(n){this.http=n}return n.prototype.getContent=function(){return this.http.get("assets/data/mocks/books.json").map(function(n){return n.json()})},n}();a=o([r.Injectable(),i("design:paramtypes",[l.Http])],a),e.SlidersService=a},775:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=t(650),l=function(){function n(){}return n.prototype.bindForm=function(n,e){var t=this;n.valueChanges.subscribe(function(o){return t.onValueChanged(o,n,e)})},n.prototype.onValueChanged=function(n,e,t){var o=this;Object.keys(n).forEach(function(n){var i=e.form.get(n),l=t[n],a=r.RULES[n];i&&l&&a&&o.validate(i,l,a)})},n.prototype.validate=function(n,e,t){if(n.dirty&&n.invalid){var o=Object.keys(n.errors)[0];e.title=t.validator[o],e.status=!0}else e.status=!1},n}();l=o([i.Injectable()],l),e.ValidatorService=l},776:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=t(0),r=function(){function n(){}return n}();r=o([i.Component({selector:"aj-404",template:t(965)})],r),e.PageNotFoundComponent=r},777:function(n,e,t){"use strict";var o=function(){function n(){}return n}();e.Book=o},778:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(779))},779:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=t(0),l=function(){function n(){this.readonly=!1}return n}();o([r.Input(),i("design:type",Number)],l.prototype,"rate",void 0),o([r.Input(),i("design:type",Boolean)],l.prototype,"readonly",void 0),l=o([r.Component({selector:"aj-rating",template:t(967),styles:[t(966)]})],l),e.RatingComponent=l},780:function(n,e,t){"use strict";function o(){return Object.assign(new f.PopoverConfig,{placement:"left",container:"body",triggers:""})}var i=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},r=t(0),l=t(15),a=t(29),s=t(209),c=t(319),u=t(567),p=t(581),f=t(574),d=t(781),h=t(782),g=t(778),m=function(){function n(){}return n}();m=i([r.NgModule({imports:[l.CommonModule,a.FormsModule,s.HttpModule,c.SwiperModule,u.DropdownModule.forRoot(),p.RatingModule.forRoot(),f.PopoverModule.forRoot()],declarations:[d.SliderComponent,h.SlideComponent,g.RatingComponent],exports:[l.CommonModule,a.FormsModule,s.HttpModule,c.SwiperModule,u.DropdownModule,p.RatingModule,f.PopoverModule,d.SliderComponent,h.SlideComponent,g.RatingComponent],providers:[{provide:f.PopoverConfig,useFactory:o}]})],m),e.SharedModule=m},781:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(784))},782:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}o(t(783))},783:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=t(0),l=t(777),a=function(){function n(){}return n}();o([r.Input(),i("design:type",l.Book)],a.prototype,"book",void 0),a=o([r.Component({selector:"aj-slide",template:t(969),styles:[t(968)]})],a),e.SlideComponent=a},784:function(n,e,t){"use strict";var o=this&&this.__decorate||function(n,e,t,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(l=(r<3?i(l):r>3?i(e,t,l):i(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},r=t(0),l=function(){function n(n){this.el=n}return n.prototype.ngOnInit=function(){this.config={spaceBetween:30,slidesPerView:5,nextButton:this.el.nativeElement.querySelector(".swiper-button-next"),prevButton:this.el.nativeElement.querySelector(".swiper-button-prev")}},n}();o([r.Input(),i("design:type",Array)],l.prototype,"books",void 0),l=o([r.Component({selector:"aj-slider",template:t(971),styles:[t(970)]}),i("design:paramtypes",[r.ElementRef])],l),e.SliderComponent=l},937:function(n,e){},959:function(n,e){n.exports=".wrapper {\n  min-height: calc(100% - 170px);\n  padding-bottom: 330px;\n}\n\n.wrapper-auth {\n  padding-bottom: 0;\n}\n"},960:function(n,e){n.exports='<aj-header *ngIf="!isAuthPage"></aj-header>\n\n<main class="wrapper" [ngClass]="{\'wrapper-auth\': isAuthPage}">\n  <router-outlet></router-outlet>\n</main>\n\n<aj-footer *ngIf="!isAuthPage"></aj-footer>\n'},961:function(n,e){n.exports=".footer {\n  width: 100%;\n  height: 330px;\n  margin-top: -330px;\n  background-color: #717a82;\n}\n\n.footer li,\n.footer a {\n  color: #fff;\n  font-size: 10pt;\n  font-weight: bold;\n  line-height: 2;\n}\n\n.footer a {\n  color: #cbd2d6;\n}\n\n.footer a:hover {\n  color: #fff;\n}\n\n.foot-content {\n  position: relative;\n  top: 50px;\n}\n\n.copyright {\n  height: 45px;\n  font-size: 8pt;\n  position: relative;\n  top: 16px;\n  margin: auto;\n  color: #cbd2d6;\n  text-align: center;\n  line-height: 4;\n  border-top: 1px solid #5e6871;\n}\n"},962:function(n,e){n.exports='<footer class="footer">\n  <div class="foot-content">\n    <div class="container">\n      <div class="row">\n        <div class="logo-footer col-lg-2">\n          <a routerLink="/home" (click)="scrollTop()">\n            <img src="assets/img/logo-footer.png" alt="logo" width="165" height="35">\n          </a>\n        </div>\n        <div class="ftcol col-lg-2">\n          <ul>\n            <li *ngFor="let link of homeLinks">\n              <a routerLink="/home" [fragment]="link.link">{{link.title}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="ftcol col-lg-2">\n          <ul>\n            <li>CATEGORIES</li>\n            <li *ngFor="let link of catalogLinks; let i = index">\n              <a *ngIf="i <= 6" [href]="link.link">{{link.title}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="ftcol col-lg-2">\n          <ul>\n            <li *ngFor="let link of catalogLinks; let i = index">\n              <a *ngIf="i > 6" [href]="link.link">{{link.title}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="ftcol col-lg-2">\n          <ul>\n            <li>CONTACT</li>\n            <li *ngFor="let link of contactsLinks">\n              <a [href]="link.link">{{link.title}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="ftcol col-lg-2">\n          <ul>\n            <li>MY ACCOUNT</li>\n            <li *ngFor="let link of accountLinks">\n              <a [href]="link.link">{{link.title}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class="row copyright">Copyright © 2017 Audio Jewels. All rights reserved.</div>\n    </div>\n  </div>\n</footer>\n'},963:function(n,e){n.exports=".header,\n.header-mock {\n  position: relative;\n  width: 100%;\n  height: 170px;\n  background-color: #fff;\n  border-bottom: 1px solid #e6edef;\n  z-index: 2000;\n}\n\n.header-mock {\n  visibility: hidden;\n}\n\n.header-fixed {\n  position: fixed;\n  height: 100px;\n  transition: .3s;\n}\n\n.container {\n  height: 100%;\n}\n\n.logo-img {\n  position: relative;\n  top: 13px;\n  left: 70px;\n}\n\n.social {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  top: 50px;\n}\n\n.social a {\n  color: #000;\n  text-decoration: none;\n}\n\n.social a:hover {\n  opacity: 0.6;\n}\n\n.follow {\n  color: #aaa;\n}\n\n.social-share {\n  display: flex;\n}\n\n.social-share li {\n  margin: 0 10px;\n}\n\n.lang {\n  margin-left: 30px;\n}\n\n.lang::after,\n.menu-link::after {\n  content: \"\\e259\";\n  margin-left: 5px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 11px;\n}\n\n.nav-menu-fix {\n  display: flex;\n  position: relative;\n  top: 10px;\n}\n\n.header-fixed .nav-menu-fix {\n  top: 25%;\n  transition: .3s;\n}\n\n.header-navbar {\n  display: flex;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\n.menu {\n  display: flex;\n  margin-right: 45px;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.menu > li {\n  position: relative;\n  padding: 9px 0 25px;\n}\n\n.header-fixed .menu > li {\n  padding-bottom: 30px;\n}\n\n.menu > li:first-child {\n  margin-right: 30px;\n}\n\n.menu-link {\n  display: inline-block;\n  line-height: 35px;\n  color: #12222e;\n  border-bottom: 2px solid transparent;\n  text-decoration: none;\n}\n\n.menu-link.active {\n  color: #005a9c;\n}\n\n.menu > li:hover .menu-link {\n  border-color: #005a9c;\n}\n\n.menu > li:hover .submenu {\n  display: block;\n}\n\n.submenu {\n  position: absolute;\n  top: 69px;\n  left: -15px;\n  display: none;\n  width: 220px;\n  padding: 0 15px 15px;\n  background: #fff;\n  border: 1px solid #e6edef;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n}\n\n.header-fixed .submenu {\n  top: 74px;\n}\n\n.submenu a {\n  display: inline-block;\n  width: 100%;\n  margin-top: 5px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.submenu a:hover {\n  color: #005a9c;\n}\n\n.header-search-book {\n  position: relative;\n  padding: 9px 0 25px;\n}\n\n.header-fixed .header-search-book {\n  padding-bottom: 30px;\n}\n\n.header-search-book .glyphicon-search {\n  position: absolute;\n  top: 25%;\n  left: 15px;\n}\n\n.header-search-book .glyphicon-search.focused {\n  color: #005a9c;\n}\n\n.header-search-field {\n  height: 35px;\n  width: 250px;\n  padding: 0 15px 0 40px;\n  font-size: 16px;\n  border-radius: 25px;\n  border: 1px solid rgba(168, 168, 168, 0.45);\n  outline: 0;\n}\n\n.header-search-field:focus {\n  width: 530px;\n  border-color: #005a9c;\n  transition: .3s;\n}\n\n.header-sing-in-up {\n  margin: 10px 0 0 45px;\n  color: #9e1f63;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.header-sing-in-up button {\n  border: none;\n  padding: 0;\n  background: none;\n  outline: 0;\n}\n\n.header-sing-in-up a {\n  color: #9e1f63;\n  text-decoration: none;\n}\n\n.header-sing-in-up button:hover,\n.header-sing-in-up a:hover {\n  opacity: 0.6;\n}\n\n.header-wish {\n  margin: 0 20px;\n}\n\n.header-cart {\n  font-size: 22px;\n  color: #000;\n  top: 3px;\n  position: relative;\n}\n\n.header-cart .badge {\n  position: absolute;\n  top: -5px;\n  right: -15px;\n  background: #c21e1e;\n}\n"},964:function(n,e){n.exports='<header class="header" [ngClass]="{\'header-fixed\': fixed}">\n  <div class="container">\n    <div class="row" *ngIf="!fixed">\n      <div class="col-lg-2">\n        <a routerLink="/home" (click)="scrollTop()">\n          <img src="assets/img/logo.png" class="logo-img" alt="logo" width="100" height="90">\n        </a>\n      </div>\n\n      <div class="col-lg-4 col-md-offset-6 social">\n        <span class="follow">Follow us:</span>\n        <ul class="social-share">\n          <li *ngFor="let social of socialLinks">\n            <a [href]="social.link"><i class="fa" [ngClass]="social.cssClass"></i></a>\n          </li>\n        </ul>\n        <a href="#" class="lang">English</a>\n      </div>\n    </div>\n\n    <div class="row nav-menu-fix">\n      <div class="col-lg-3">\n        <a routerLink="/home" (click)="scrollTop()">\n          <img src="assets/img/logo-text.png" class="logo-text" alt="logo" width="235" height="55">\n        </a>\n      </div>\n\n      <div class="col-lg-9 header-navbar">\n        <nav class="nav">\n          <ul class="menu">\n            <li>\n              <a routerLink="/home" routerLinkActive="active" (click)="scrollTop()" class="menu-link">Home</a>\n              <ul class="submenu">\n                <li *ngFor="let link of homeLinks">\n                  <a routerLink="/home" [fragment]="link.link">{{link.title}}</a>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href="#" class="menu-link">AudioBooks catalog</a>\n              <ul class="submenu">\n                <li *ngFor="let link of catalogLinks">\n                  <a [href]="link.link">{{link.title}}</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n\n          <form action="#" class="header-search-book">\n            <span class="glyphicon glyphicon-search" [ngClass]="{\'focused\': isSearchFocused}"></span>\n            <input class="header-search-field" type="search" placeholder="Search a book" (focus)="toggleFocus()" (blur)="toggleFocus()">\n          </form>\n        </nav>\n\n        <div class="header-sing-in-up" *ngIf="!isSearchFocused">\n          <a routerLink="/login" class="header-sing-in">Sing in</a> / <a routerLink="/sign-up" class="header-sing-up">Sing up</a>\n          <button class="header-wish">\n            <img src="assets/img/icons/wish.png" alt="wishlist" width="20" height="20">\n          </button>\n          <button class="header-cart">\n            <i class="fa fa-shopping-cart"></i>\n            <span class="badge"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<div class="header-mock" *ngIf="fixed"></div>\n'},965:function(n,e){n.exports='<div class="container">\n  <h3>Page not found..</h3>\n</div>\n'},966:function(n,e){n.exports=":host {\n  cursor: pointer;\n}\n\n:host /deep/ span[role=slider] {\n  font-size: 18px;\n  color: #aaa;\n  outline: 0;\n}\n\n:host /deep/ .filled {\n  color: #ffbb07;\n}\n\n:host.feedback-rate {\n  float: right;\n  position: relative;\n  top: 10px;\n}\n\n:host.feedback-rate /deep/ span[role=slider] {\n  font-size: 28px;\n  color: #e6e6e6;\n}\n"},967:function(n,e){n.exports='<rating [name]="\'rate\'" [(ngModel)]="rate" [max]="5" [readonly]="readonly"\n        stateOn="glyphicon-star filled" stateOff="glyphicon-star"></rating>\n'},968:function(n,e){n.exports=".slide {\n  height: 260px;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.cover-book {\n  height: 170px;\n  margin-bottom: 5px;\n  position: relative;\n}\n\n.bookmark {\n  width: 32px;\n  height: 34px;\n  top: 0;\n  right: 5px;\n  background: url(assets/img/slider-img/bookmark-img.png) no-repeat;\n  position: absolute;\n  cursor: pointer;\n}\n\n.bookmark:hover {\n  background: url(assets/img/slider-img/bookmark-img-hover.png) no-repeat;\n}\n\n.btn-play {\n  width: 37px;\n  height: 39px;\n  bottom: 5px;\n  left: 10px;\n  background: url(assets/img/slider-img/btn-play-img.png) no-repeat;\n  position: absolute;\n  cursor: pointer;\n}\n\n.btn-play:hover {\n  opacity: .9;\n}\n\n.name-book {\n  font-size: 18px;\n  line-height: 20px;\n  font-weight: 500;\n  color: #000;\n}\n\n.authors-book {\n  color: #aaa;\n}\n\n.slide:hover .name-book,\n.slide:hover .authors-book {\n  text-decoration: underline;\n}\n\n.text-cut {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n"},969:function(n,e){n.exports='<a href="#" class="slide">\n  <div class="cover-book">\n    <img [src]="book.imageUrl" [alt]="book.title" width="100%" height="100%">\n    <div class="bookmark"></div>\n    <div class="btn-play"></div>\n  </div>\n\n  <span class="name-book">{{book.title}}</span><br>\n  <span class="authors-book">{{book.authors}}</span><br>\n\n  <aj-rating [rate]="book.rate" [readonly]="true"></aj-rating>\n</a>\n'},970:function(n,e){n.exports=".swiper-button {\n  position: static;\n  margin: 65px auto 0;\n}\n\n.swiper-button:hover {\n  opacity: .8;\n}\n"},971:function(n,e){n.exports='<div class="row">\n  <div class="col-lg-1">\n    <div class="swiper-button swiper-button-prev"></div>\n  </div>\n\n  <div class="col-lg-10">\n    <swiper [config]="config">\n      <div class="swiper-wrapper">\n        <aj-slide *ngFor="let book of books" [book]="book" class="swiper-slide"></aj-slide>\n      </div>\n    </swiper>\n  </div>\n\n  <div class="col-lg-1">\n    <div class="swiper-button swiper-button-next"></div>\n  </div>\n</div>\n'}},[1232]);