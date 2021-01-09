import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { isValidValidator } from '../../directives/is-valid.directive';
const { isNumbersFieldValid, customSort } = require('../../utils/utils.js');
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
        isValidValidator()
      ])
    });
  }

  get columns() {
    return this.form.get('columns');
  }

  onBlurEvent(event: any) {
    const columns = event.target.value;

    this.form.patchValue({ 'columns': customSort(columns).join(', ') });
  }

  onKeyUp(event: any): void {
    console.clear();
    let value: string = event.target.value.split(' ').join('');
    
    if (isNumbersFieldValid(value)) {
      const inputArr: Array<string> = value.split(',');
      const result: number[] = [];

      inputArr.forEach( (item: string) => {
        if(this.isNotRangeItem(item)) {
          result.push(parseInt(item));
        } else {
          const start: number = parseInt(item.substr(0, item.indexOf('-')));
          const end: number = parseInt(item.substr(item.indexOf('-') + 1));

          for(let i = start; i <= end; i++) {
            result.push(i);
          }
        }
      });

      this.selectedColumns = result;
    } else {
      this.selectedColumns = [];
    }

    this.updatePlate();    
  }

  isNotRangeItem(item: string): boolean {
    if(item === '') return true;

    return item.indexOf('-') == -1;
  }

  updatePlate(): void {
    this.plateSelector.onColumnsChanged(this.selectedColumns);
  }

  updateInput(selectedColumns: Array<number>): void {
    this.form.patchValue({ 'columns': customSort(selectedColumns.join(',')).join(', ') });
  }
}