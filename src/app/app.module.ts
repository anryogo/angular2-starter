import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found';

/* Feature Modules */
import { CoreModule } from './core';
import { SharedModule } from './shared';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Additional styles */
import '../styles/common.css';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
