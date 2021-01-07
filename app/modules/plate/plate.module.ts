import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Components
import { MicroplateComponent } from '../../components/microplate/microplate.component';

@NgModule({
  declarations: [
    MicroplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MicroplateComponent
  ]
})
export class PlateModule { }
