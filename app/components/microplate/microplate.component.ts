import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-microplate',
  templateUrl: './microplate.component.html',
  styleUrls: ['./microplate.component.css']
})
export class MicroplateComponent implements OnInit {
  from;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.from = this.formBuilder.group({
      columns: ''
    });
  }

  ngOnInit(): void {
  }

}
