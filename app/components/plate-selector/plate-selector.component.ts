import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
const { getDimensions } = require('../../utils/utils.js');

@Component({
  selector: 'app-plate-selector',
  templateUrl: './plate-selector.component.html',
  styleUrls: ['./plate-selector.component.css']
})
// Child Component.
export class PlateSelectorComponent implements OnInit {
  @Input() wells: number;
  columns: number;
  letters: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  selectedColumns: Array<number> = [];
  @Output() selectColumn: EventEmitter<any> = new EventEmitter<any>();

  // I added some more wells because of the indicators (first row numbers and first column letters)
  numbers: Array<number> = [];
  rows: number = 0;

  ngOnInit() {
    this.provideDataForDrawingPlate(96);
  }

  provideDataForDrawingPlate(wells: number): void {
    // Disk/Plate dimentions (including indicator wells - i.e., letters and column numbers)
    const arrDimentsions = getDimensions(wells);
    this.rows = arrDimentsions[0];
    this.columns = arrDimentsions[1];

    // numbers are used to draw the disk/plate (We also need some extra numbers
    // because of the indicators (letters and column numbers))
    for (let i = 1; i <= this.wells + this.rows + this.columns + 1; i++)
      this.numbers.push(i);
  }

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

  onColumnsChanged(selectedColumns: Array<number>): void {
    this.selectedColumns = selectedColumns;
  }

  isWellSelected(number: number): boolean {
    return this.selectedColumns.indexOf((number - 1) % (this.columns + 1)) != -1;
  }

  onSelectColumn(number: number) {
    console.clear();
    console.log(number);
    if (this.isFirstColumn(number)) return;
    console.log(100000);
    console.log(this.selectedColumns);
    this.selectedColumns.push((number - 1) % (this.columns + 1));
    console.log('calc', (number - 1) % (this.columns + 1));
    console.log(this.selectedColumns);

    this.selectColumn.emit(this.selectedColumns);
  }
}
