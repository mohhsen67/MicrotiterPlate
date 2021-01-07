import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Import Components
import { MicroplateComponent } from '../../components/microplate/microplate.component';

@NgModule({
  declarations: [
    MicroplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MicroplateComponent
  ]
})
export class PlateModule { }
