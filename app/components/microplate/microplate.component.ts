import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { isValidValidator } from '../../directives/is-valid.directive';
const isNumbersFieldValid = require('../../utils/utils.js');

@Component({
  selector: 'app-microplate',
  templateUrl: './microplate.component.html',
  styleUrls: ['./microplate.component.css']
})
export class MicroplateComponent implements OnInit {
  form: FormGroup;

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

    this.form.patchValue({ 'columns': arr.sort().join(', ') });
  }

  onKeyUp(value: string): void {
    value = value.replaceAll(' ', '');

    if (isNumbersFieldValid(value)) {
      const inputArr: Array<string> = value.split(',');
      const result: Array<number> = [];

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

      console.log(result.sort());
    }
  }

  isNotRangeItem(item: string): boolean {
    return item.indexOf('-') == -1;
  }
}