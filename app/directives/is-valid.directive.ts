import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function isValidValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return isNumbersFieldValid(control.value) ? {isValid: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appIsValid]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsValidDirective, multi: true}]
})
export class IsValidDirective implements Validator {
  @Input('appIsValid') isValid: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.isValid ? isValidValidator()(control) : null;
  }
}

const isNumbersFieldValid = (str: any) => {
  if (str == '') return true;

  let lower = 1, upper = 384;
  
  // Removing the unnecessary spaces
  str = str.replace(/\s/g, '');
  
  // Split the string by comma (,)
  const nums = str.split(',');
  const track: any = {};
  
  // Visit the numbers
  for (const num of nums) {
    
    // Check if any number contains a dash (-)
    if (/\-/.test(num)) {
      
      // If has dash then split by dash and get the upper and lower bounds.
      const [l, u] = num.split('-').map((x: any) => x * 1);
      
      // Visit from lower to upper bound
      for (let i = l; i <= u; i++) {
        
        // If any number of the range doesn't exceed the upper
        // or lower bound i.e. [1, 384] range and did not
        // appear before then track this number.
        // otherwise return false i.e. mark it as invalid.
        if (i >= lower && i <= upper && track[i] === undefined) {
          track[i] = true;
        } else {
          return false;
        }
      }
      
    } else {
      
      // Checking again if it exceed the range [1, 384] or appears before.
      if (num * 1 >= lower && num * 1 <= upper && track[num] === undefined) {
        track[num] = true;
      } else {
        return false;
      }
    }
  }
  
  // If everything okay then return true, i.e. valid.
  return true;
}