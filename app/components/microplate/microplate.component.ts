import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { isValidValidator } from '../../directives/is-valid.directive';

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
    const arr = columns.split(',').map(item => item.trim());

    this.form.patchValue({ 'columns': arr.sort().join(',') });
  }
}