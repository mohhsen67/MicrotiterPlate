import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
const { isNumbersFieldValid } = require('../utils/utils.js');

export const isValidValidator = (): ValidatorFn =>
  (control: AbstractControl): { [key: string]: any } | null =>
    isNumbersFieldValid(control.value) ? { isValid: { value: control.value } } : null;

@Directive({
  selector: '[appIsValid]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsValidDirective, multi: true }]
})
export class IsValidDirective implements Validator {
  @Input('appIsValid') isValid: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.isValid ? isValidValidator()(control) : null;
  }
}
