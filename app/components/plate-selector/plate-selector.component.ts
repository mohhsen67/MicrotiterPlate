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
  @Output() selectColumn: EventEmitter<any> = new EventEmitter<any>();

  columns: number;
  letters: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  selectedColumns: Array<number> = [];

  // I added some more wells because of the indicators (first row numbers and first column letters)
  numbers: Array<number> = [];
  rows = 0;

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
    for (let i = 1; i <= this.wells + this.rows + this.columns + 1; i++) {
      this.numbers.push(i);
    }
  }

  isFirstRowOrFirstColumn(num: number): boolean {
    const result: boolean =
      (this.isFirstColumn(num) ||
        this.isFirstRow(num)) &&
      !this.isExactlyFirstCell(num);

    return result;
  }

  isLastColumn(num: number): boolean {
    return num % (this.columns + 1) === 1;
  }

  isFirstColumn(num: number): boolean {
    return num % (this.columns + 1) === 1;
  }

  isFirstRow(num: number): boolean {
    return num <= this.columns + 1;
  }

  isExactlyFirstCell(num: number): boolean {
    return num === 1;
  }

  onColumnsChanged(selectedColumns: Array<number>): void {
    this.selectedColumns = selectedColumns;
  }

  isWellSelected(num: number): boolean {
    return this.selectedColumns.indexOf((num - 1) % (this.columns + 1)) !== -1;
  }

  onSelectColumn(num: number) {
    if (this.isFirstColumn(num)) {
      return;
    }

    this.selectedColumns.push((num - 1) % (this.columns + 1));

    this.selectColumn.emit(this.selectedColumns.join(','));
  }
}
