import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-selector',
  templateUrl: './plate-selector.component.html',
  styleUrls: ['./plate-selector.component.css']
})
export class PlateSelectorComponent implements OnInit {
  wells: number = 96;
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
