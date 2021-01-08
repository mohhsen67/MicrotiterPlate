import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-selector',
  templateUrl: './plate-selector.component.html',
  styleUrls: ['./plate-selector.component.css']
})
export class PlateSelectorComponent {
  wells: number = 96;
  columns: number = 12;
  letters: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  // I added some more wells because of the indicators (first row numbers and first column letters)
  numbers: Array<number> = Array(this.wells + this.columns + (this.wells / this.columns + 1)).fill().map((item, index) => ++index);

  isFirstRowOrFirstColumn(number: number): boolean {
    let result: boolean =
      (this.isFirstColumn(number) ||
       this.isFirstRow(number)) &&
       !this.isExactlyFirstCell(number);

    return result;
  }

  isLastColumn(number: number): boolean {
    return number % (this.columns + 1) == 1;
  }

  isFirstColumn(number: number): boolean {
    return number % (this.columns + 1) == 1;
  }

  isFirstRow(number: number): boolean {
    return number <= this.columns + 1;
  }

  isExactlyFirstCell(number: number): boolean {
    return number == 1;
  }
}
