import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { MicroplateComponent } from '../../components/microplate/microplate.component';

@NgModule({
  declarations: [
    MicroplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MicroplateComponent
  ]
})
export class PlateModule { }
