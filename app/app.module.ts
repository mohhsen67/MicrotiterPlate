import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroplateComponent } from './components/microplate/microplate.component';

// Import feature modules
import { PlateModule } from './modules/plate/plate.module';

@NgModule({
  declarations: [
    AppComponent,
    MicroplateComponent
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
