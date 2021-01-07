import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Import Components
import { MicroplateComponent } from '../../components/microplate/microplate.component';
import { PlateSelectorComponent } from '../../components/plate-selector/plate-selector.component';

@NgModule({
  declarations: [
    MicroplateComponent,
    PlateSelectorComponent
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
