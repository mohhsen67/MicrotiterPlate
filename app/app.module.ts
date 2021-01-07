import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import feature modules
import { PlateModule } from './modules/plate/plate.module';
import { IsValidDirective } from './directives/is-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    IsValidDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
