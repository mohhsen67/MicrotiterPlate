import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { isValidValidator } from '../../directives/is-valid.directive';
const isNumbersFieldValid = require('../../utils/utils.js');
import { PlateSelectorComponent } from '../plate-selector/plate-selector.component';

@Component({
  selector: 'app-microplate',
  templateUrl: './microplate.component.html',
  styleUrls: ['./microplate.component.css']
})
// Parent Component
export class MicroplateComponent implements OnInit {
  form: FormGroup;
  selectedColumns: Array<number> = [];
  @ViewChild(PlateSelectorComponent)
  plateSelector: PlateSelectorComponent;

  ngOnInit(): void {
    this.form = new FormGroup({
      columns: new FormControl('', [
        Validators.required,
        isValidValidator()
      ])
    });
  }

  get columns() {
    return this.form.get('columns');
  }

  onBlurEvent(event: any) {
    const columns = event.target.value;
    const arr = columns.split(',').map((item: any) => item.trim());

    this.form.patchValue({ 'columns': arr.sort( (a, b) => 
      a - b
    ).join(', ') });
  }

  onKeyUp(value: string): void {
    value = value.split(' ').join('');

    if (isNumbersFieldValid(value)) {
      const inputArr: Array<string> = value.split(',');
      const result = [];

      inputArr.forEach( (item: string) => {
        if(this.isNotRangeItem(item)) {
          result.push(parseInt(item));
        } else {
          const start: number = parseInt(item.substr(0, 1));
          const end: number = parseInt(item.substr(2, 1));

          for(let i = start; i <= end; i++) {
            result.push(i);
          }
        }
      });

      this.selectedColumns = result.sort( (a, b) => a - b);
    } else {
      this.selectedColumns = [];
    }

    this.updatePlate();    
  }

  isNotRangeItem(item: string): boolean {
    return item.indexOf('-') == -1;
  }

  updatePlate(): void {
    this.plateSelector.onColumnsChanged(this.selectedColumns);
  }
}